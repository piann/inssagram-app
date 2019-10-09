import React, {useState} from "react";
import styled from "styled-components";

import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import {Alert, TouchableWithoutFeedback, Keyboard} from "react-native";
import { useMutation} from "react-apollo-hooks";
import {CREATE_ACCOUNT} from "./AuthQueries";

 const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

 const Text = styled.Text``;

 export default ({navigation}) => {
    const firstNameInput = useInput("");
    const lastNameInput = useInput("");
    const defaultEmail = navigation.getParam("email", "")
    const emailInput = useInput(defaultEmail);
    const userNameInput = useInput("");
    const [loading, setLoading] = useState(false);
    
    const [createAccountMutation] = useMutation(CREATE_ACCOUNT,{
        variables:{
            firstName:firstNameInput.value,
            lastName:lastNameInput.value,
            email:emailInput.value,
            userName:userNameInput.value
        }
    });
    const handleSignUp = async () => {
        const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const {value:firstName} = firstNameInput;
        const {value:lastName} = lastNameInput;
        const {value:email} = emailInput;
        const {value:userName} = userNameInput;
        if(email.match(emailRegex) === null){
            return Alert.alert("Email format is not valid");
        } else if(firstName==="" || lastName==="" || userName===""){
            return Alert.alert("Fill out all form");
        } else {
            try{
                setLoading(true);
                const {data:{createAccount}} = await createAccountMutation();
                if(createAccount){
                    Alert.alert("Sign Up Done! Login now")
                    navigation.navigate("Login", {email});
                    return;
                } else {
                    Alert.alert("This user-name or Email is already used. Try login")
                    navigation.navigate("Login", {email});
                    }
            }catch(e){
                console.log(e)
                setLoading(false);
                Alert.alert("Can't sign in now, check IP ADDR");
                
            }finally{
                setLoading(false);
            }
        
        }
    }

    return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
        <AuthInput {...firstNameInput} placeholder="First name" autoCapitalize="words"/>
        <AuthInput {...lastNameInput} placeholder="Last name" autoCapitalize="words"/>
        <AuthInput {...emailInput} placeholder="Email" keyboardType="email-address" />
        <AuthInput {...userNameInput} placeholder="User nickname" />
        
        <AuthButton loading={loading} text="Sign Up" onPress={handleSignUp}/>
        </View>
    </TouchableWithoutFeedback>
    )
};