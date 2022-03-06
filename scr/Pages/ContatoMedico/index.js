import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import logoImg from '../../../assets/contato.png';
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
            
            <View style={styles.header}>
                <Image source={logoImg} style={styles.logo}/>
            </View>

            <Text style={styles.activityTitle}> Como deseja entrar em</Text>
            <Text style={styles.activityTitle}> contato com seu médico?</Text>

            <Text style={styles.activityTitle}> </Text>

                        <TouchableOpacity style={styles.action} 
                            onPress={() => {
                                Linking.openURL ('whatsapp://send?phone=5534984135676')
                            }}>
                        <Feather name="message-circle" size={28} color="#fff"/>
                        <Text style={styles.actionText}>   Whatsapp</Text>
                        </TouchableOpacity>
                        <Text style={styles.activityTitle}> </Text>


                        <TouchableOpacity style={styles.action} 
                            onPress={() => {
                                MailComposer.composeAsync({
                                    subject: 'Contato do Sistema de Telemedicina',
                                    recipients: ['mariana.rigo@gmail.com']
                                })
                            }}>
                        <Feather name="mail" size={28} color="#fff"/>
                        <Text style={styles.actionText}>       E-mail</Text>
                        </TouchableOpacity>
                        <Text style={styles.activityTitle}> </Text>

                        <TouchableOpacity style={styles.action} 
                            onPress={() => {
                                Linking.openURL ('https://calendly.com/mariana-restev')
                            }}>
                        <Feather name="video" size={28} color="#fff"/>
                        <Text style={styles.actionText}>  </Text>
                        <Text style={styles.actionText}>    Agendar videochamada*</Text>
                        </TouchableOpacity>
                                  
                        <Text style={styles.instrucao}>   *O agendamento da videochamada para tirar
                        dúvidas é realizado por meio da plataforma Calendly, de acordo
                        com os horários disponíveis do(a) médico(a). </Text>
                        <Text style={styles.instrucao}>   Não é necessário criar uma conta 
                        na plataforma, basta adicionar seu nome e e-mail, após selecionar a data e 
                        horário desejadas. </Text>
                        <Text style={styles.instrucao}>   Você receberá um invite no Google Agenda com
                        o link da chamada, via Meet. </Text>

        </View>    
        </ScrollView>
        </Provider>

);
}

export default MyComponent;
