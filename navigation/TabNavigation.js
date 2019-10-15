import { createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs"
import Home from "../screens/Home";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import {View, Text, Image, Platform} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import MessagesLink from "../components/MessagesLink"
import styled from "styled-components";
import constants from "../constants";
import styles from "../styles";
import NavIcon from "../components/NavIcon";

const stackFactory = (initialRoute, customConfig)=> createStackNavigator(
    {
        InitialRoute:{
            screen:initialRoute, navigationOptions:{...customConfig}
        }
    }
); 

const TabNavigation = createBottomTabNavigator({
  Home:{

      screen: stackFactory(Home,{
        headerRight: <MessagesLink />,
        headerLeft: <View size={25} />,
        headerStyle: {height: 40, paddingBottom:15},
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
    screen: stackFactory(Search,{
        title:"Search!"
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