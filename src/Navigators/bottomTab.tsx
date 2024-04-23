import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Navigation } from "../Constants/Navigation";
import Home from "../Screens/Home/home";
import Note from "../Screens/Note/Note";

const Drawer = createBottomTabNavigator();

export default function DrawerNavigation(){
    return (
    <>
    <Drawer.Navigator initialRouteName={Navigation.Home}>
        <Drawer.Screen name={Navigation.Home} component={Home}></Drawer.Screen>
        <Drawer.Screen name={Navigation.Note} component={Note}></Drawer.Screen>
    </Drawer.Navigator>
    </>
    )
}