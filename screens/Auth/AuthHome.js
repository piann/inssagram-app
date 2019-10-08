import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import constants from "../constants";

const Text = styled.Text``;
const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Image = styled.Image`
    width : ${constants.width / 1.8};
`;

const Touchable = styled.TouchableOpacity``;
const Button = styled.View`
    background-color:${props=>props.theme.blueColor};
    padding: 10px 0px;
    width: ${constants.width/ 2};
    border-radius:4.5px;
    margin-bottom:15px;
    
`;
const ButtonText = styled.Text`
    color:whitesmoke;
    text-align:center;
    font-weight:600;
    
`;
const LoginLink = styled.View`
    flex-direction:row;
`;
const LoginText = styled.Text`
    color:${props=>props.theme.blueColor};
    font-weight:600;
`;


 export default ({ navigation }) => (
  <View>
    <Image source={require("../../assets/logo.png")} resizeMode={"contain"}/>
    <Touchable onPress={()=> navigation.navigate("Signup")}>
        <Button>
            <ButtonText>Create New Account</ButtonText>
        </Button>
    </Touchable>
    <Touchable onPress={()=> navigation.navigate("Login")}> 
        <LoginLink>
            <Text>or <LoginText> Sign In</LoginText></Text>
        </LoginLink>
    </Touchable>
  </View>
);