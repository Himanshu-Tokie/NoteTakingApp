import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Setting({navigation}){
    return(
        <>
        <SafeAreaView>
        <View>
            <Text>
                Welcome Setting
            </Text>
        </View>
        </SafeAreaView>
        </>
    )
}