import React, {Component, useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Image, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import PerfilMed from '../../../assets/medico.png';
import styles from './styles';

export default class App extends Component {

    render() {
        
        const {navigation} = this.props;
       
        function navigateBack() {
            navigation.navigate('Selecione o Perfil');
        }

        function navigateToInicioPro() {
            navigation.navigate('Perfil Profissional');
        }

        function navigateToCadastro() {
            navigation.navigate('Cadastro Profissional');
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
                placeholder="Login"
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
            onPress={navigateToInicioPro}>
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


