import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Navigation } from "../Constants/Navigation";
import DrawerNavigation from "./bottomTab";
import { navigatorStyle } from "./style";

export default function AuthNavigator(){
    const Stack = createStackNavigator();
    return (
        <SafeAreaView style={navigatorStyle.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={Navigation.Home} screenOptions={{headerShown:false}}>
                    {/* <Stack.Screen name={Navigation.Login} cromponent={Login}></Stack.Screen> */}
                    <Stack.Screen name={Navigation.Home} component={DrawerNavigation}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};
