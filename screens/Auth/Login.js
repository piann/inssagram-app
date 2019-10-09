import React, {useState} from "react";
import styled from "styled-components";

import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import {Alert, TouchableWithoutFeedback, Keyboard} from "react-native";
import { useMutation} from "react-apollo-hooks";
import {LOG_IN} from "./AuthQueries";

 const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

 const Text = styled.Text``;

 export default ({navigation}) => {
    const emailInput = useInput("");
    const [loading, setLoading] = useState(false);
    const [requestSecretMutation] = useMutation(LOG_IN,{
        variables:{
            email:emailInput.value
        }
    });
    const handleLogin = async () => {
        const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const {value} = emailInput;
        if(value.match(emailRegex) === null){
            return Alert.alert("Email format is not valid");
        }else{
            try{
                setLoading(true);
                const {data:{requestSecret}} = await requestSecretMutation();
                if(requestSecret){
                    Alert.alert("Confirmation Email Send! Check ur email.")
                    navigation.navigate("Confirm", {email:value});
                    return;
                } else {
                    Alert.alert("Account not found. Sign up first")
                    navigation.navigate("Signup", {email:value});
                }
            }catch(e){
                console.log(e)
                setLoading(false);
                return Alert.alert("Can't log in now, check IP ADDR");
            }finally{
                setLoading(false);
            }
        
        }
    }

    return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
        <AuthInput {...emailInput} placeholder="Email" keyboardType="email-address" returnKeyType="send" onSubmitEditing={handleLogin}/>
        <AuthButton loading={loading} text="Log In" onPress={handleLogin}/>
        </View>
    </TouchableWithoutFeedback>
    )
};