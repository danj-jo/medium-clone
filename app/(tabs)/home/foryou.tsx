import React from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import Post from "@/components/ui/post";
import {Stack, useRouter} from "expo-router";
import {FontAwesome, MaterialIcons} from "@expo/vector-icons";

const Foryou = () => {
 const router = useRouter()

  return (

<View style={{ backgroundColor: "#36465D", height: "100%"}}>
    <Post content={"/Users/nolimit/repos/tumblr-clone/assets/images/favicon.png"}  type="image" />
  <Pressable onPress = {() => router.push("/postModal")} style={{backgroundColor: "blue",position: "absolute",borderRadius: 60, height: 60,width: 60, marginTop: 500, alignSelf: "flex-end", alignItems: "center"}}>
    <FontAwesome name="pencil" size={45} color="black" style={{marginTop: 5}} />
  </Pressable>
</View>
  );
};

export default Foryou;
