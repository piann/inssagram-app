import React from "react";
import styled from "styled-components";
import constants from "../constants";
import PropTypes from "prop-types";


const Container = styled.View`
    margin-bottom:12px;
`;

const TextInput = styled.TextInput`
    background-color:${props=>props.theme.greyColor};
    width: ${constants.width/ 1.8};
    padding:9px;
    border: 1.5px solid rgb(225,225,235);
    border-radius:4px;
`;


const AuthInput = ({placeholder, value, keyboardType="default", autoCapitalize="none", onChange}) => (
    <Container>
        <TextInput
        onChangeText={onChange} 
        placeholder={placeholder} 
        value={value} 
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        onChange={onChange}
        />
    </Container>
)

AuthInput.propTypes = {
    placeholder:PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    keyboardType:PropTypes.oneOf([
        "default",
        "number-pad",
        "decimal-pad",
        "numeric",
        "email-address",
        "phone-pad"
      ]),
    autoCapitalize: PropTypes.oneOf(
        ["none",
         "sentences",
         "words",
         "characters"
      ]),
      onChange:PropTypes.func.isRequired,

}

export default AuthInput