import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListTemplate from "../../Components/listItem";

const data = [
    {
        name:'himanshu'
    },
    {
        name:'tokie'
    },
    {
        name:'Rokuro'
    }
]
export default function Label({navigation}){
    return(
        <>
        <SafeAreaView>
        <View>
        <FlatList
            renderItem={({ item, index, separator }) => {
              return (
                <ListTemplate data={item} nav={navigation}/>
              );
            }}
            data={data}
          ></FlatList>
        </View>
        </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    image:{
        height:50,
        width:50
    }
})