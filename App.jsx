import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import AuthNavigator from "./src/Navigators/AuthNavigator";
import { persister, store } from "./src/Store";
export default function App(){
  return (    
    <>
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persister}>
        <AuthNavigator></AuthNavigator>
      </PersistGate>
    </Provider>
    </>
  )
}