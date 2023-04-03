import React, { useState } from "react"
import { Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard } from "react-native";
import { Styles } from "../../styles/ScreensStyles";
import { AntDesign } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';
import { postUser } from "../../../services/ApiServices";

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

export default function RegisterScreen({navigation, route}){

    const insets = useSafeAreaInsets();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = () =>{

        if(email !== '' & password !== ''){
            postUser(email, password).then(console.log(data => {
                console.log(data)
                if(data !== undefined)
                    route.params.setUserStatus(true); 
                    
                else
                    alert("No se pudo crear el usuario")

            })).catch(error => {console.log(error)});
        }

        else{
            alert("Debe llenar todos los campos")
        } 
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={[Styles.containerLayout, {paddingTop: insets.top}]}>

                <View>
                    <Text style={Styles.title}>Register</Text>
                </View>

                <View style={Styles.iconLayout}>
                    <AntDesign name="form" size={80} color="white" />
                    <Text style={[Styles.inputLabel, {textAlign: 'center', paddingVertical: 10}]}>Para completar el registro debes ingresar llenar los campos con tu información</Text>
                </View>

                <View>
                    <View style={Styles.inputContainer}>
                        <Text style={Styles.inputLabel}>Email</Text>
                        <TextInput 
                            style={Styles.input}
                            placeholder="Ingresa tu contraseña"
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

                    <TouchableOpacity style={Styles.buttonStyle} onPress={register}>
                        <View>
                            <Text style={Styles.buttonLoginText}>Register</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={Styles.createAccountLayout}>
                    <Text style={Styles.createAccountText}>Ya estas registrado?</Text>
                    <TouchableOpacity>
                        <Text style={Styles.createAccountTexthighlight} onPress={() => navigation.navigate('loginScreen')}>Inicia sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </TouchableWithoutFeedback>
    )
}



