import React from "react";
import styled from "styled-components";
import constants from "../constants";
import PropTypes from "prop-types";
import {ActivityIndicator} from "react-native"


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

const AuthButton = ({text, onPress, loading=false}) => (
<Touchable onPress={onPress} disabled={loading}>
    <Button>
        {loading?
            <ActivityIndicator color={"white"} /> :
            <ButtonText>{text}</ButtonText>
            }
    </Button>
</Touchable>)

AuthButton.propTypes = {
    loading:PropTypes.bool,
    text:PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}

export default AuthButton