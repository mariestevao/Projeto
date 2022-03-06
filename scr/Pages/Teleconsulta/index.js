import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import logoImg from '../../../assets/teleconsulta.png';
import styles from './styles';
import { Button, Divider, Menu, Provider } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';


const MyComponent = () => {
  
    const [visible, setVisible] = React.useState(false);
  
    const openMenu = () => setVisible(true);
  
    const closeMenu = () => setVisible(false);
    const navigation = useNavigation();
    
    return (
      <Provider>
        <ScrollView>
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
                    navigation.navigate('Instrução');
                  }} 
                  title="Coletas" />
            <Divider />
                  <Menu.Item 
                 onPress={() => {
                  openMenu(false);
                  navigation.navigate('Perfil Paciente');
                }}
                  title="Perfil" />
          </Menu>
  
        </View>

        
        <View style={styles.container}>
            
        <Text style={styles.activityTitle}> </Text>

            <View style={styles.header}>
                <Image source={logoImg} style={styles.logo}/>
            </View>

            <Text style={styles.activityTitle}> </Text>

                      <Text style={styles.instrucao}>   *O agendamento da teleconsulta
                        é realizado por meio da plataforma Calendly, de acordo
                        com os horários disponibilizados pelo(a) médico(a). </Text>
                        <Text style={styles.instrucao}>   Não é necessário criar uma conta 
                        na plataforma, basta adicionar seu nome e e-mail após selecionar a data e 
                        o horário desejados. </Text>
                        <Text style={styles.instrucao}>   Você receberá um convite no Google Agenda com
                        o link da chamada para a teleconsulta, via Google Meet. </Text>

                        <Text style={styles.activityTitle}> </Text>
                        <Text style={styles.activityTitle}> </Text>

                        <TouchableOpacity style={styles.action} 
                            onPress={() => {
                                Linking.openURL ('https://calendly.com/mariana-restev')
                            }}>
                        <Feather name="video" size={28} color="#fff"/>
                        <Text style={styles.actionText}>  </Text>
                        <Text style={styles.actionText}>    Agendar Teleconsulta*</Text>
                        </TouchableOpacity>
                          
        </View>    
        </ScrollView>
        </Provider>

);
}

export default MyComponent;
