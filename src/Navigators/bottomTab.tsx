import { createDrawerNavigator } from "@react-navigation/drawer";
import { Navigation } from "../Constants/Navigation";
import Home from "../Screens/Home/home";
import Note from "../Screens/Note/Note";
import Setting from "../Screens/Settings/setting";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(){
    return (
    <Drawer.Navigator initialRouteName={Navigation.Home}>
        <Drawer.Screen name={Navigation.Home} component={Home}></Drawer.Screen>
        <Drawer.Screen name={Navigation.Note} component={Note}></Drawer.Screen>
        <Drawer.Screen name={Navigation.Setting} component={Setting}></Drawer.Screen>
        {/* <Drawer.Screen name={Navigation.Note} component={Note}></Drawer.Screen> */}
    </Drawer.Navigator>
    )
}