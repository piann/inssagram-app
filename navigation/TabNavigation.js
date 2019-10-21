import { createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs"
import Home from "../screens/Tabs/Home";
import Search from "../screens/Tabs/Search";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";
import Detail from "../screens/Detail";
import {View, Text, Image, Platform} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import MessagesLink from "../components/MessagesLink"
import styled from "styled-components";
import constants from "../constants";
import styles from "../styles";
import NavIcon from "../components/NavIcon";
import {stackStyles} from "./config";
import UserDetail from "../screens/UserDetail";

const stackFactory = (initialRoute, customConfig) =>
  createStackNavigator({
    InitialRoute: {
      screen: initialRoute,
      navigationOptions: {
        
        ...customConfig
      }
    },
    Detail:{
      screen:Detail,
      navigationOptions: {
        headerTintColor: styles.blackColor,
        title: "Detail Page"
      }
    },
    UserDetail:{
      screen: UserDetail,
      navigationOptions:({navigation})=>({
        title: navigation.getParam("userName")
      })
    }
  },{
    defaultNavigationOptions:{
      headerBackTitle: null,
      headerTintColor: styles.blackColor,
      headerStyle: { ...stackStyles },
    },
   
  });

const TabNavigation = createBottomTabNavigator({
  Home:{

      screen: stackFactory(Home,{
        headerRight: <MessagesLink />,
        headerLeft: <View size={25} />,
        headerTitle:(
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image 
          style={{
            height:27}}
            resizeMode="contain"
            source={require("../assets/logo.png")}/>
          </View>

        )
      }
    ),
    navigationOptions:{
      tabBarIcon:({ focused }) => (
        <NavIcon
          focused={focused}
          name={Platform.OS === "ios" ? "ios-home" : "md-home"}
        />
      )
    }
  },
  Search:{
    screen: stackFactory(Search, {
      headerBackTitle: null
    }),
      navigationOptions:{
        tabBarIcon:({ focused }) => (
          <NavIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
          />
        )
      }
  },
  Add: {
    screen: View,
    navigationOptions: {
      tabBarOnPress: ({navigation}) => {
        navigation.navigate("PhotoNavigation")
      },
      tabBarIcon:({ focused }) => (
        <NavIcon
          focused={focused}
          size={32}
          name={
            Platform.OS === "ios"
              ? "ios-add-circle-outline"
              : "md-add-circle-outline"
          }
        />
      )
    }
  },
  Notifications:{
    screen: stackFactory(Notifications,{
        title:"Noti!"
      }),
      navigationOptions:{
        tabBarIcon:({ focused }) => (
          <NavIcon
            focused={focused}
            name={
              Platform.OS === "ios"
                ? focused
                  ? "ios-heart"
                  : "ios-heart-empty"
                : focused
                ? "md-heart"
                : "md-heart-empty"
            }
          />
        )
      }
  },
  Profile:{
    screen: stackFactory(Profile,{
        title:"Profile!"
      }),
      navigationOptions:{
        tabBarIcon: ({ focused }) => (
          <NavIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-person" : "md-person"}
          />
        )
      }
  },
},
{
  tabBarOptions: {
    showLabel: false,
    style: {
      backgroundColor: "#FAFAFA"
    }
  }
}
);

 export default TabNavigation;