import React from "react";
import { TextInput } from "react-native";
import PropTypes from "prop-types";
import constants from "../constants";
import styles from "../styles";
import styled from "styled-components";

const View = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`;

const SearchBar = ({ onChange, value, onSubmit }) => (
    <View>
        <TextInput
        style={{
            width: constants.width - 40,
            height: 35,
            backgroundColor: styles.lightGreyColor,
            padding: 10,
            borderRadius: 5,
            textAlign: "center",
        }}
        returnKeyType="search"
        onChangeText={onChange}
        onEndEditing={onSubmit}
        value={value}
        placeholder={"Search"}
        placeholderTextColor={styles.darkGreyColor}
        />
    </View>
)

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};
export default SearchBar;