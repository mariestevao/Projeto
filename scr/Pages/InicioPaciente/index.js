import React, {Component, useState, useEffect} from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Button, Divider, Menu, Provider } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import PerfilMed from '../../../assets/perfil.png';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import styles from './styles';

const MyComponent = () => {
  
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const navigation = useNavigation();
  
  return (
    <Provider>
      <View
        style={{
          paddingTop: 45,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}><Feather name="menu" size={28} color="#00CCC1"/> MENU </Button>}>
                <Menu.Item 
                onPress={() => {
                  openMenu(false);
                  navigation.navigate('Instrução');
                }}
                title="Instruções de uso"/>
                <Menu.Item 
                  onPress={() => {
                  openMenu(false);
                  navigation.navigate('Coletas');
                }} 
                title="Coletas" />
                <Menu.Item 
                onPress={() => {
                  openMenu(false);
                  navigation.navigate('Contato com médico');
                }} 
                title="Contatar Profissional" />

              <Menu.Item 
                onPress={() => {
                  openMenu(false);
                  navigation.navigate('Questionário');
                }} 
                title="Questionário" />

              <Menu.Item 
                onPress={() => {
                  openMenu(false);
                  navigation.navigate('Teleconsulta');
                }} 
                title="Agendar Teleconsulta" />

            <Divider />
                <Menu.Item 
               onPress={() => {
                openMenu(false);
                navigation.navigate('Login Paciente');
              }}
                title="Sair" />
        </Menu>

      </View>

      <View style={styles.container}>

            <View style={styles.header}>
                <Image source={PerfilMed} style={styles.logo} />
            </View>
            
            <Text style={styles.title}>Meu Perfil</Text>
            <Text style={styles.cadastro}>Editar Perfil</Text>
            
            <Text style={styles.title}></Text>
            <Text style={styles.information}>  Nome</Text>
            <Text style={styles.information}>  Idade</Text>
            <Text style={styles.information}>  E-mail</Text>
            <Text style={styles.information}>  Endereço</Text>
            <Text style={styles.information}>  Profissional acompanhando</Text>

      </View>

    </Provider>

  );
}

export default MyComponent;