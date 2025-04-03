import React from 'react';
import {View, Text, Image, Button, Pressable, Touchable, TouchableOpacity, ScrollView} from 'react-native';
import {post} from "@/interfaces/interfaces";
import {EvilIcons, Feather, MaterialIcons} from "@expo/vector-icons";
import {Colors} from "@/constants/Colors";



const Post  = (post:  post) => {
  return (
      <ScrollView>
    <View style={{backgroundColor: "white", minHeight: 300, borderWidth: 2, borderColor: "brown"}}>
     <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 20}}>
        <Image  source={{uri: "/Users/nolimit/repos/tumblr-clone/assets/images/favicon.png"}}
                resizeMethod={"auto"}
                style={{width: 20, height: 35, borderRadius: 70}} />
         <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
             <TouchableOpacity>
                 <Text style={{backgroundColor: "#EEEEEE", borderRadius: 15, width: 70, padding: 5,height: 30, textAlign: "center"}}> Follow </Text>
             </TouchableOpacity>
         <Pressable>
             <MaterialIcons name="more-horiz" size={29}/>
         </Pressable>

         </View>

     </View>
        <View style={{height: "auto", borderWidth: 2, borderColor: "red", backgroundColor: "gray" }}>
            <View style={{minHeight: 350}}>
                {post.type == "string" ? <Text> {post.content} </Text> : <Image source={{uri: post.content}} />}
            </View>
            <View style={{backgroundColor: "white", paddingLeft: 10, paddingRight: 10}}>
             <Text> {post.description}  </Text>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>

                {post.notes > 0 ? <View
                    style={{backgroundColor: "#EEEEEE", width: 70, borderRadius: 50, flexDirection: "row", padding: 5}}>
                    <Text>{post.notes}</Text>
                    <Text style={{color: Colors.light.icon}}> notes </Text>
                </View> : <View>></View>}

                <View style={{flexDirection: "row", gap: 10, marginBottom: 5}}>
                    <Feather name={"share"} color={Colors.light.icon} size={25} />
                    <EvilIcons name={"comment"} color={Colors.light.icon} size={25} />
                    <Feather name={"repeat"} color={Colors.light.icon} size={25} />
                    <Feather name={"heart"} color={Colors.light.icon} size={25}/>
                </View>
            </View>
            </View>
        </View>
         </View>

      </ScrollView>
  );
};

export default Post ;
