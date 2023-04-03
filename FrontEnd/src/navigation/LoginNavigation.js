import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/accountScreens/loginScreen/LoginScreen";
import RegisterScreen from "../screens/accountScreens/registerScreen/RegisterScreen";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);


const Stack = createNativeStackNavigator();

export default function LoginNavigation({setUserStatus}){
    
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='loginScreen' component={LoginScreen} initialParams={{setUserStatus: setUserStatus}}/>
            <Stack.Screen name='registerScreen' component={RegisterScreen} initialParams={{setUserStatus: setUserStatus}}/>
        </Stack.Navigator>
    )
    
}