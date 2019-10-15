import React, {useState} from "react";
import {RefreshControl} from "react-native"
import styled from "styled-components";
import { gql } from "apollo-boost";
import Loader from "../components/Loader";
import { useQuery } from "react-apollo-hooks";
import { FlatList } from "react-native-gesture-handler";


const FEED_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        userName
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          userName
        }
      }
      createdAt
    }
  }
`;

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default () => {
    const [refreshing, setRefreshing] = useState(false);
    const { loading, data, refetch } = useQuery(FEED_QUERY);
    const refresh = async () => {
      try {
        setRefreshing(true);
        await refetch();
      } catch (e) {
        console.log(e);
      } finally {
        setRefreshing(false);
      }
    };
  return <FlatList
  refreshControl={
    <RefreshControl refreshing={refreshing} onRefresh={refresh} />
  }
  >{loading ? 
    <Loader /> : 
    <Text>Home</Text>
  }</FlatList>;
};