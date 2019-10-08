import React from "react";
import styled from "styled-components";
import constants from "../constants";
import PropTypes from "prop-types";
const Touchable = styled.TouchableOpacity``;
const Button = styled.View`
    background-color:${props=>props.theme.blueColor};
    padding: 10px 0px;
    width: ${constants.width/ 1.8};
    border-radius:4.5px;
    
`;
const ButtonText = styled.Text`
    color:whitesmoke;
    text-align:center;
    font-weight:600;
    
`;

const AuthButton = ({text, onPress}) => (<Touchable>
    <Button onPress={onPress}>
        <ButtonText>{text}</ButtonText>
    </Button>
</Touchable>)

AuthButton.propTypes = {
    text:PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}

export default AuthButton