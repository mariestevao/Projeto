import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import logoImg from '../../../assets/inicio.png';
import styles from './styles';

export default function Perfil() {
    
    const navigation = useNavigation();
    

    function navigateToPaciente() {
        navigation.navigate('Login Paciente');
    }

    function navigateToProfissional() {
        navigation.navigate('Login Profissional');
    }

         return (
        <ScrollView>
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Image source={logoImg} style={styles.logo}/>
            </View>

            <Text style={styles.title}>-----------------</Text>
            <Text style={styles.title}>Bem-Vindo(a)!</Text>
            <Text style={styles.title}>-----------------</Text>
            <Text style={styles.title}></Text>
            <Text style={styles.activityTitle}> Selecione seu tipo de perfil</Text>
           
            
            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={navigateToPaciente}>
                    <Text style={styles.actionText}>Paciente</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={navigateToProfissional}>
                    <Text style={styles.actionText}>Profissional da saúde</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.nomesTitle}>Aplicativo desenvolvido por:</Text>
            <Text style={styles.nomes}>Mariana Rigo Estevão</Text>
            <Text style={styles.nomes}>Matheus Venturi</Text>
            <Text style={styles.nomes}>Lucas Guaragna</Text>
           
        
        </View>    
        </ScrollView>
      );
}