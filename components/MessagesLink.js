import React from "react";
import styled from "styled-components";
import { withNavigation } from "react-navigation";
import {Ionicons} from "@expo/vector-icons";
import styles from "../styles";
import NavIcon from "./NavIcon";
import { Platform } from "react-native";

 const Container = styled.TouchableOpacity`
    margin-right:20px;
 `;
const Text = styled.Text``;

export default withNavigation(({ navigation }) => (
  <Container onPress={() => navigation.navigate("MessageNavigation")}>
    <NavIcon
      name={Platform.OS === "ios" ? "ios-paper-plane" : "md-paper-plane"}
      size={27}
    />
  </Container>
));