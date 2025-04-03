import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Post from "@/components/ui/post";

const Foryou = () => {
  return (
<View style={{backgroundColor: "#36465D", height:" 100%"}}>
    <Post content={"Hello"} notes={"0"} type="string" />
</View>
  );
};

export default Foryou;
