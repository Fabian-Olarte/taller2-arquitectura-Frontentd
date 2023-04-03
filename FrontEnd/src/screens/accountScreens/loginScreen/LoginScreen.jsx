import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard } from "react-native";
import { Styles } from "../../styles/ScreensStyles";
import { AntDesign } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getUser } from "../../../services/ApiServices";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

export default function LoginScreen({navigation, route}){

    const insets = useSafeAreaInsets();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        if(email !== '' & password !== ''){
            getUser(email, password).then(data => {
                console.log(data)
                if(data !== undefined)
                    route.params.setUserStatus(true);

                else
                    alert("Usuario no encontrado")
                
            }).catch(error => {console.log(error)});
        }

        else{
            alert("Debe llenar todos los campos")
        }        
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={[Styles.containerLayout, {paddingTop: insets.top}]}>

                <View>
                    <Text style={Styles.title}>Login</Text>
                </View>

                <View style={Styles.iconLayout}>
                    <AntDesign name="login" size={80} color="white" />
                </View>

                <View>
                    <View style={Styles.inputContainer}>
                        <Text style={Styles.inputLabel}>Email</Text>
                        <TextInput 
                            style={Styles.input}                        
                            placeholder="example@company.com"
                            placeholderTextColor="#3E3E3E" 
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />
                    </View>

                    <View style={Styles.inputContainer}>
                        <Text style={Styles.inputLabel}>Password</Text>
                        <TextInput 
                            style={Styles.input}
                            placeholder="Ingresa tu contraseña"
                            placeholderTextColor="#3E3E3E" 
                            value={password}
                            onChangeText={text => setPassword(text)}
                        />
                    </View>

                    <TouchableOpacity style={Styles.buttonStyle} onPress={login}>
                        <View>
                            <Text style={Styles.buttonLoginText}>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={Styles.createAccountLayout}>
                    <Text style={Styles.createAccountText}>No estas registrado?</Text>
                    <TouchableOpacity>
                        <Text style={Styles.createAccountTexthighlight} onPress={() => navigation.navigate('registerScreen')}>Crear cuenta</Text>
                    </TouchableOpacity>
                </View>
                
            </View>

        </TouchableWithoutFeedback>
    )
}