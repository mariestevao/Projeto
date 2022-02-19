import React, {Component, useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import logoImg from '../../../assets/instruction.png';
import styles from './styles';
import { Feather } from '@expo/vector-icons';

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
       
       <ScrollView>
        <View style={styles.container}>
        
        <TouchableOpacity style={styles.volta} onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#00CCC1" />
                    <Text style={styles.volta2}>Voltar</Text>
        </TouchableOpacity>
                 
            <View style={styles.header}>
                <Image source={logoImg} style={styles.logo}/>
            </View>

            <Text style={styles.title}>Instruções de Uso</Text>
            <Text style={styles.title}>-----------------</Text>
            <Text style={styles.title}></Text>
            <Text style={styles.activityTitle}> Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took 
            a galley of type and scrambled it to make a type specimen book. It has survived 
            not only five centuries, but also the leap into electronic typesetting, remaining 
            essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.</Text>
           
            
            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={navigateToPaciente}>
                    <Text style={styles.actionText}>Paciente</Text>
                </TouchableOpacity>

            </View>           
        
        </View>    
        </ScrollView>
      );
    }
}