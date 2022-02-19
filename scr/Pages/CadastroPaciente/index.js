import React, {Component, useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet, Image, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import PerfilMed from '../../../assets/touch.png';
import styles from './styles';

export default class App extends Component {

    render() {
        
        const {navigation} = this.props;
       
        function navigateBack() {
            navigation.navigate('Login Paciente');
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
                placeholder="Nome completo"
                placeholderTextColor="darkslategrey" 
            />

            <TextInput
                style={styles.input}
                placeholder="Nascimento (dd/mm/aaaa)"
                placeholderTextColor="darkslategrey" 
            />

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="darkslategrey" 
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="darkslategrey" 
            />

            <TextInput
                secureTextEntry = {true}
                style={styles.input}
                placeholder="Confirmar senha"
                placeholderTextColor="darkslategrey" 
            />
          
            <TouchableOpacity 
            style={styles.action} 
            onPress={navigateBack}>
                 <Text style={styles.actionText}>Cadastrar</Text>
            </TouchableOpacity>
            
            </View>
        )
    }
}

