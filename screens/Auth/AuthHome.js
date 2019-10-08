import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import constants from "../../constants";
import AuthButton from "../../components/AuthButton";

const Text = styled.Text``;
const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Image = styled.Image`
    width : ${constants.width / 1.6};
`;

const Touchable = styled.TouchableOpacity``;

const LoginLink = styled.View`
    flex-direction:row;
    margin-top:12px;
`;
const LoginText = styled.Text`
    color:${props=>props.theme.blueColor};
    font-weight:600;
    
`;


 export default ({ navigation }) => (
  <View>
    <Image source={require("../../assets/logo.png")} resizeMode={"contain"}/>
    <AuthButton text={"Create New Account"} onPress={()=>navigation.navigate("Signup")}/>
    <Touchable onPress={()=> navigation.navigate("Login")}> 
        <LoginLink>
            <Text>or <LoginText> Sign In</LoginText></Text>
        </LoginLink>
    </Touchable>
  </View>
);