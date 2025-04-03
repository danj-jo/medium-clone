import React from 'react';
import {View, Text, Image} from 'react-native';
import {
    createMaterialTopTabNavigator
    , MaterialTopTabNavigationOptions,
    MaterialTopTabNavigationEventMap
} from "@react-navigation/material-top-tabs";
import {withLayoutContext} from "expo-router";
import {ParamListBase, TabNavigationState} from "@react-navigation/native";
import {MaterialIcons} from "@expo/vector-icons";

const {Navigator} = createMaterialTopTabNavigator()
export const MaterialTopTabs = withLayoutContext<MaterialTopTabNavigationOptions,
    typeof Navigator,
    TabNavigationState<ParamListBase>,
    MaterialTopTabNavigationEventMap>(Navigator)

const Home = () => {
    return (
        <View style={{flex: 1,  backgroundColor: "#36465D", minHeight: 180}}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Image
                    source={{uri: "/Users/nolimit/repos/tumblr-clone/assets/images/tumblrLogo.png"}}
                    resizeMethod={"auto"}
                    style={{width: 20, height: 35, marginTop: 70, marginLeft: 20}}/>
                <View style={{flexDirection: "row", marginRight: 10}}>
                    <MaterialIcons style={{alignSelf: "flex-end", marginRight: 20}} name={"storefront"} size={30}
                                   color={"white"}/>

                    <MaterialIcons style={{alignSelf: "flex-end"}} name={"diamond"} size={30} color={"white"}/>
                </View>
            </View>

            <MaterialTopTabs

                screenOptions={{
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveTintColor: 'white',
                    tabBarIndicatorStyle: {
                        backgroundColor: "white",
                      marginBottom: 15
                    },
                    tabBarStyle: {
                        backgroundColor: "#36465D",

                    },
                    tabBarItemStyle: {


                    },
                    tabBarContentContainerStyle: {
                    }
                }}>
                <MaterialTopTabs.Screen name={"foryou"} options={{
                    title: "For You",
                }}/>
                <MaterialTopTabs.Screen name={"following"} options={{title: "Following"}}/>
                <MaterialTopTabs.Screen name={"yourtags"} options={{title: "Your Tags"}}/>

                <MaterialTopTabs.Screen name={"settings"} options=
                    {{
                        title: '',
                        tabBarActiveTintColor: "white",
                        tabBarIcon: () => <MaterialIcons name={"tune"} color={"white"} size={22}
                                                         style={{marginLeft: 53, marginTop: 10,

                                                         }}/>,

                    }}/>

            </MaterialTopTabs>
        </View>

    );
};

export default Home;