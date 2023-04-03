import React from "react";
import AppScreen from "../screens/appScreens/appScreen/AppScreen";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

export default function AppNavigation(){
    return(
        <AppScreen />
    )



    

}