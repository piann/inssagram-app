import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as Permissions from "expo-permissions";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import * as MediaLibrary from "expo-media-library";
import Loader from "../../components/Loader";
import constants from "../../constants";
import styles from "../../styles";


 const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

 const Text = styled.Text``;

 export default () => {
  const [loading, setLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);
  const [selected, setSelected] = useState();
  const [allPhotos, setAllPhotos] = useState();
  const getPhotos = async() => {
    try{
      const { assets } = await MediaLibrary.getAssetsAsync({
        sortBy: [[MediaLibrary.SortBy.creationTime, false]]
      });
      const [firstPhoto] = assets;
      console.log(firstPhoto);
      setSelected(firstPhoto);
      setAllPhotos(assets);

    }catch(e){
      console.log(e);
    }
  }
  const askPermission = async()=>{
    try{
      const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);
      console.log(permission);
      const {status} = permission;
      if (status === "granted"){
        await getPhotos();
        console.log(selected);
        setHasPermission(true);
      }
    } catch(e){
      console.log(e)
      setHasPermission(false);
    }
  };
  useEffect(()=>{
    askPermission();
  }, []);

  return(

  <View>
    {hasPermission? <Image style={{width:150, height:150}} source={{uri:selected.uri}}/>
    : <Text>"U have to grant permssion"</Text>}
  </View>
  )
 };