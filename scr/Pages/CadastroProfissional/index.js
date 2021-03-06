import React, { Component } from 'react';
import { ScrollView, StyleSheet, StatusBar, FlatList,  View, Image, Text, TouchableOpacity, Button, Alert, KeyboardAvoidingView, Keyboard } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import Logo from '../../../assets/touch.png';
import axios from 'axios';
import styles from './styles';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            NAME: "",
            CRM: "",
            CELULAR: "",
            EMAIL: "",
            SENHA: "",
        }
    }

    storeCPF = async () => {
        try {
            await AsyncStorage.setItem('@USER_NAME', this.state.NAME)
            await AsyncStorage.setItem('@USER_NASCIMENTO', this.state.CRM)
            await AsyncStorage.setItem('@USER_CELULAR', this.state.CELULAR)
            await AsyncStorage.setItem('@USER_EMAIL', this.state.EMAIL)
            await AsyncStorage.setItem('@USER_SENHA', this.state.SENHA)

          const valores = "NAME: " + await AsyncStorage.getItem('@USER_NAME') + "CRM: " + await AsyncStorage.getItem('@USER_CRM') +
          "CELULAR " + await AsyncStorage.getItem('@USER_CELULAR') + "EMAIL: " + await AsyncStorage.getItem('@USER_EMAIL') + "SENHA: " + await AsyncStorage.getItem('@USER_SENHA')
          Keyboard.dismiss()
          await axios.post('https://webhook.site/50056033-80cd-4011-8da6-ea48d164835b', {valores})
          Alert.alert("Aviso", "Cadastrado com sucesso");
        } catch (e) {
          Alert.alert("Aviso", "Não foi possível cadastrar");
          console.log(e)
        }
    }


    render() {
        return(
            <ScrollView>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'} keyboardVerticalOffset={0} >
                <View style={styles.container}>
                    <TouchableOpacity style={styles.seta} >
                        <Feather name="chevron-left" size={38} color="#00CCC1" onPress={() => this.props.navigation.navigate('Login Paciente')}/>
                    </TouchableOpacity>
                    
                    <Image source={Logo} style={styles.logo} />
                    
                    
                    <Text style={styles.cadastro}> Nome completo </Text>
                    <TextInputMask
                        type={'custom'}
                        value={this.state.NAME}
                        style={styles.input}
                        keyboardType='text'
                        placeholder='Nome'
                        onChangeText={text => {
                            this.setState({ NAME : text })
                        }}
                    />

                    <Text style={styles.cadastro}> CRM </Text>
                    <TextInputMask
                        type={'custom'}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        value={this.state.NASCIMENTO}
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='A054008'
                        onChangeText={text => {
                            this.setState({ CRM: text })
                        }}
                        
                    />            

                    <Text style={styles.cadastro}> Celular </Text>
                    <TextInputMask
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={this.state.CELULAR}
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder=' (99) 99999-99999 '
                        onChangeText={text => {
                            this.setState({
                            CELULAR: text
                            })
                        }}
                    />

                    <Text style={styles.cadastro}> E-mail </Text>
                    <TextInputMask
                        type={'custom'}
                        value={this.state.EMAIL}
                        style={styles.input}
                        keyboardType='text'
                        placeholder=' usuário@email.com '
                        onChangeText={text => {
                            this.setState({
                            EMAIL: text
                            })
                        }}
                    />

                    <Text style={styles.cadastro}> Senha </Text>
                    <TextInputMask
                        type={'custom'}
                        value={this.state.SENHA}
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder=' ****** '
                        onChangeText={text => {
                            this.setState({
                            SENHA: text
                            })
                        }}
                    />
                    <Text style={styles.cadastro}>   </Text>

                 
                    
                    
                    <TouchableOpacity style={styles.action} onPress={this.storeCPF}>
                        <Text style={styles.actionText}>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}