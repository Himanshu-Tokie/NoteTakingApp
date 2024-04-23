
import { useState } from "react";
import { Text } from "react-native";
import Google from "./google";

export default function Login({navigation}) {
  //   AsyncStorage.getAllKeys().then(value => console.log(value));
  const [user, setUser] = useState();
  console.log(user);
  
  return (
    <>
    <Text>Rock</Text>
    <Google setState={setUser}></Google>
    </>
  );
}

