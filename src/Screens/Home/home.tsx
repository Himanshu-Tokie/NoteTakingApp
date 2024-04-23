import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({navigation}){
    return(
        <>
        <SafeAreaView>
        <View>
            <Text>
                Welcome Home
            </Text>
        </View>
        </SafeAreaView>
        </>
    )
}