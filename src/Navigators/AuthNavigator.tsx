import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Navigation } from "../Constants/Navigation";
import Home from "../Screens/Home/home";
import Label from "../Screens/Label/label";
import Login from "../Screens/Login/login";
import Note from "../Screens/Note/Note";
import { navigatorStyle } from "./style";

export default function AuthNavigator(){
    const Stack = createStackNavigator();
    return (
        <SafeAreaView style={navigatorStyle.container}>
            <NavigationContainer >
                <Stack.Navigator initialRouteName={Navigation.Home} screenOptions={{headerShown:true}}>
                    <Stack.Screen name={Navigation.Login} component={Login}></Stack.Screen>
                    <Stack.Screen name={Navigation.Home} component={Home}></Stack.Screen>
                    <Stack.Screen name={Navigation.Note} component={Note}></Stack.Screen>
                    <Stack.Screen name={Navigation.Label} component={Label}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};
