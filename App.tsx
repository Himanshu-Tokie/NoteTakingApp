import React from "react";
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/lib/integration/react";
import AuthNavigator from "./src/Navigators/AuthNavigator";
import { persister, store } from "./src/Store";
export default function App(){
  return (
    <>
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persister}>
        <AuthNavigator/>
      </PersistGate>
    </Provider>
    </>
  )
}