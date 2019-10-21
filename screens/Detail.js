import React from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import { POST_FRAGMENT } from "../fragments";
import Loader from "../components/Loader";
import Post from "../components/Post";
import {ScrollView} from "react-native";

const View = styled.View``;
const Text = styled.Text``;
const POST_DETAIL = gql`
  query getPostInfo($id: String!) {
    getPostInfo(id: $id) {
      ...PostParts
    }
  }
  ${POST_FRAGMENT}
`;


export default ({ navigation }) => {
  const {loading, data} = useQuery(POST_DETAIL, {
    variables:{id:navigation.getParam("id")}
  });
  return(
    <ScrollView styled={{flex:1}}>
    {loading? (
      <Loader/>
      ):(
        data && data.getPostInfo && <Post {...data.getPostInfo} />
      )
    }
    </ScrollView>
  );

};