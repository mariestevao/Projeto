import React, {Component, useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet, Image, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import PerfilMed from '../../../assets/sinal.png';
import styles from './styles';
import axios from 'axios';

export default class App extends Component {

    botao = async () => {
        const valores = "olá";
        await axios.post('https://webhook.site/50056033-80cd-4011-8da6-ea48d164835b', (valores));
    }


    render() {
        
        const {navigation} = this.props;
       
        function navigateBack() {
            navigation.navigate('Selecione o Perfil');
        }
        
        function navigateToPaciente() {
            navigation.navigate('Perfil Paciente');
        }

        function navigateToCadastro() {
            navigation.navigate('Cadastrar Paciente');
        }
        
        return(
            <View style={styles.container}>

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
            />

            <TextInput
                secureTextEntry = {true}
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="darkslategrey" 
            />
          
            <TouchableOpacity 
            style={styles.action} 
            onPress = {this.botao}>
                 <Text style={styles.actionText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.blococadastro} onPress={navigateToCadastro}>
                    <Text style={styles.cadastro}>Primeiro acesso</Text>
                    <Text style={styles.cadastro}>    </Text>
            </TouchableOpacity>
            
            </View>
        )
    }
}

