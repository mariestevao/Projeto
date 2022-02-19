import React, {Component, useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Image, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import PerfilMed from '../../../assets/perfil.png';
import styles from './styles';

export default class App extends Component {

    render() {
        
        const {navigation} = this.props;
       
        function navigateBack() {
            navigation.navigate('Login Profissional');
        }
        
        function navigateToPaciente() {
            navigation.navigate('InicioPaciente');
        }

        return(
            <View style={styles.container}>
            
            <TouchableOpacity style={styles.volta} onPress={navigateBack}>
                    <Text style={styles.saida}>Sair</Text>
                    <Feather name="log-out" size={28} color="#00CCC1" />
            </TouchableOpacity>            
            
           
            <View style={styles.header}>
                <Image source={PerfilMed} style={styles.logo} />
            </View>
            
            <Text style={styles.title}>Meu Perfil</Text>
            <TouchableOpacity style={styles.blococadastro} onPress={navigateToPaciente}>
                    <Text style={styles.cadastro}>Editar Perfil</Text>
            </TouchableOpacity>
         
            <Text style={styles.title}></Text>
            <Text style={styles.information}>  Nome</Text>
            <Text style={styles.information}>  Profissão</Text>
            <Text style={styles.information}>  CRM</Text>
            <Text style={styles.information}>  Quantidade de pacientes</Text>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={navigateBack}>
                    <Text style={styles.actionText}>Listagem de Pacientes</Text>
                </TouchableOpacity>
            </View>

            
            </View>
        )
    }
}
