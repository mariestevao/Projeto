import React, {Component, useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Image, Text, TouchableOpacity, SafeAreaView, TextInput, Platform } from 'react-native';
import PerfilMed from '../../../assets/medico.png';
import styles from './styles';
import firebase from '../../Config/firebase';
import { KeyboardAvoidingView } from 'react-native-web';

export default function Login({navigation}){

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorLogin, setErrorLogin] = useState("")

    const loginFirebase = () =>{


    }

    useEffect = (() =>{


    }, []);
            
        return(
         <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={styles.container}>

            <TouchableOpacity style={styles.volta} onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#00CCC1" />
                    <Text style={styles.volta2}>Voltar</Text>
            </TouchableOpacity>

            <Image
            source={PerfilMed}
            style={styles.logo}
            />
            
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="darkslategrey" 
                type = "text"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />

            <TextInput
                secureTextEntry = {true}
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="darkslategrey" 
                type = "text"
                onChangeText={(text) => setSenha(text)}
                value={senha}
            />

            (errorLogiin === true ?

            <View style={styles.contentAlert}> 
                
                    <Feather name="alert-triangle" size={28} color="#00CCC1" />
                <Text style={styles.actionText}> Tentativa inválida. </Text>
            </View>
            :
            <View>

            </View>
            {email === "" || senha === ""
            ?
                <TouchableOpacity 
                disabled={true}
                style={styles.action}>
                    <Text style={styles.actionText}>Entrar</Text>
                </TouchableOpacity>
            :
                <TouchableOpacity 
                style={styles.action} 
                onPress = {this.botao}>
                    <Text style={styles.actionText}>Entrar</Text>
                </TouchableOpacity>
            }

            <TouchableOpacity style={styles.blococadastro} onPress={() => navigation.navigate("Cadastro Profissional")}>
                    <Text style={styles.cadastro}>Primeiro acesso</Text>
                    <Text style={styles.cadastro}>    </Text>
            </TouchableOpacity>

         </KeyboardAvoidingView>
           
        )
    
}


