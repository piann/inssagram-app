import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import * as Font from 'expo-font';
import {Asset} from 'expo-asset';
import { Text, View, AsyncStorage } from "react-native";
import {InMemoryCache} from 'apollo-cache-inmemory';
import {persistCache} from 'apollo-cache-persist';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo-hooks';
import apolloClientOpts from './apollo';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [client, setClient] = useState(null);
  const preLoad = async () => {
    try {
      await Font.loadAsync({
        ...Ionicons.font
      });
      await Asset.loadAsync([require("./assets/logo.png")]);
      const cache = new InMemoryCache();
      await persistCache({
        cache,
        storage: AsyncStorage
      });
      const client = new ApolloClient({
        cache,
        ...apolloClientOpts
      });
      setLoaded(true);
      setClient(client);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    preLoad();

  }, []);
  return loaded && client ? (
    <ApolloProvider client={client}>

    <View>
      <Text>App.js is working !</Text>
    </View>
  </ApolloProvider>
  ) : (
    <AppLoading />
  );
}