import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginNavigation from "./LoginNavigation";
import AppNavigation from "./AppNavigation";
import { AccountProvider } from "../context/LoginContext";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

export default function MainNavigation(){

    const [estado, setEstado] = useState(false);

    const getUserStatus = (data) => {
        setEstado(data);
    }

    return(
        <NavigationContainer>
            <AccountProvider>
                {estado? <AppNavigation setUserStatus={getUserStatus} /> : <LoginNavigation setUserStatus={getUserStatus}/>}
            </AccountProvider>
        </NavigationContainer> 
    )
}
