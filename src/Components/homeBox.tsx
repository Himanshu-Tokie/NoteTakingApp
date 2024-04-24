import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Navigation } from "../Constants/Navigation";


export default function Box({text,nav}){
    function navigationHandler(){
        nav.navigate(Navigation.Label)
    }
    return (
        <>
        
            <TouchableOpacity onPress={navigationHandler}>
            <View style={styles.container}>
            <Text style = {styles.text}>
                {text.name}
            </Text>
            {/* other data */}
        </View>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        height:150,
        width:150,
        borderWidth:2,
        borderColor:'black',
        margin:20,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
    }
})