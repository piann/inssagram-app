import React from "react";
import { Image } from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";
import constants from "../constants";
import styled from "styled-components";



const SquarePhoto = ({ navigation, files = [], id }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Detail", { id })}>
      <Image
        source={{ uri: files[0].url }}
        style={{ width: constants.width / 3, height: constants.height / 6 }}
      />
    </TouchableOpacity>
  );
  
SquarePhoto.propTypes = {
    files: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    ).isRequired,
    id: PropTypes.string.isRequired
  };
  
  export default withNavigation(SquarePhoto);