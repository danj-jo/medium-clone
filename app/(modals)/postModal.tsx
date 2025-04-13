import React from 'react';
import {View, Text, Pressable, TextInput, Image, TouchableOpacity} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import {useRouter} from "expo-router";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const PostModal = () => {
    const router = useRouter()
    const {bottom} = useSafeAreaInsets()
  return (
    <View style={{backgroundColor: "white", height: "100%"}}>
        <View style={{marginHorizontal: 10}}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        <Pressable onPress={() => router.back()}>
            <MaterialIcons name={"close"} size={30} style={{marginTop: 20}}/>
        </Pressable>
                <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                <Pressable>
                    <Text style={{marginTop: 10,backgroundColor: "#EEEEEE", borderRadius: 20, width: 70, padding: 5, height: 30, textAlign: "center"}}> Post </Text>
                </Pressable>
                <Pressable style={{marginTop: 5}}>
                    <MaterialIcons name="more-horiz" size={29}/>
                </Pressable>
                </View>
            </View>
            <Image
                source={{uri: "/Users/nolimit/repos/tumblr-clone/assets/images/react-logo.png"}}
           style={{width: 50, height: 50, marginTop: 50}} />
            <TextInput
                editable
                multiline
              placeholder={"Add something, if you'd like"}
            />
            <View style={{flexDirection: "row", top: bottom}}>
                <MaterialCommunityIcons name="format-letter-case" size={24} color="black" />
            </View>
        </View>
    </View>
  );
};

export default PostModal;
