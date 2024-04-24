import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Box from '../../Components/homeBox';

const data = [
  {
    name: 'himanshu',
  },
  {
    name: 'tokie',
  },
  {
    name: 'Rokuro',
  },
{
  name: 'Benio',
},
];

export default function Home({navigation}) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text>Welcome Himanshu</Text>
            <Text>Note Taking App</Text>
          </View>
          <View>
            <Image
              style={styles.image}
              source={{
                uri: '/Users/chicmic_reacjs01/Desktop/Note/wallpaperflare.com_wallpaper.jpg',
              }}></Image>
          </View>
        </View>

        <View style={styles.box}>
          <FlatList style={styles.labels}
            data={data}
            numColumns={2}
            renderItem={({item}) => <Box text={item} nav={navigation}></Box>}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
    container:{
        marginHorizontal:10

    },
  image: {
    height: 60,
    width: 60,
    marginRight:10
  },
  header:{
    flexDirection:'row',
    alignContent:'space-between',
    justifyContent:'space-between',
  },
  box:{
    alignItems:'center',
  },
  labels:{

  }
});
