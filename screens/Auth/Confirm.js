import React, {useState} from "react";
import styled from "styled-components";

import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import {Alert, TouchableWithoutFeedback, Keyboard} from "react-native";
import { useMutation} from "react-apollo-hooks";
import {LOG_IN, CONFIRM_SECRET} from "./AuthQueries";
import { useLogIn } from "../../AuthContext";

 const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

 const Text = styled.Text``;

 export default ({navigation}) => {
    const secretInput = useInput("");
    const [loading, setLoading] = useState(false);
    const [confirmSecretMutation] = useMutation(CONFIRM_SECRET,{
        variables:{
            email:navigation.getParam("email"),
            secret:secretInput.value
        }
    });
    const logIn = useLogIn();
    const handleLogin = async () => {
         const {value} = secretInput;
        if(value === ""){
            return Alert.alert("Secret key can't be empty.")
        }

        try{
            setLoading(true);
            const {data:{confirmSecret}} = await confirmSecretMutation();
            if(confirmSecret){

                Alert.alert("Success to Login")
                logIn(confirmSecret)
                navigation.navigate("Confirm");
                return;
            } else {
                Alert.alert("Wrong Secret");
            }
        }catch(e){
            console.log(e)
            setLoading(false);
            return Alert.alert("Can't confirm secret now, check IP ADDR");
        }finally{
            setLoading(false);
        }
        
        
    }

    return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
        <AuthInput {...secretInput} placeholder="Secret Key" returnKeyType="send" onSubmitEditing={handleLogin}/>
        <AuthButton loading={loading} text="Confirm" onPress={handleLogin}/>
        </View>
    </TouchableWithoutFeedback>
    )
};