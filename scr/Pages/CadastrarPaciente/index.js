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
            NASCIMENTO: "",
            CELULAR: "",
            EMAIL: "",
            NOMEEMERGENCIA: "",
            TELEMERGENCIA: "",
            SENHA: "",
        }
    }

    multSet = async () => {
        const nome = ["@USER_NAME", this.state.NASCIMENTO]
        const niver = ["@USER_NASCIMENTO", this.state.NASCIMENTO]
        const cel = ["@USER_CELULAR", this.state.CELULAR]
        const email = ["@USER_EMAIL", this.state.EMAIL]
        const ctt = ["@USER_NOMEEMERGENCIA", this.state.NOMEEMERGENCIA]
        const celctt = ["@USER_TELEMERGENCIA", this.state.TELEMERGENCIA]
        const senha = ["@USER_SENHA", this.state.SENHA]
        try {
            await AsyncStorage.multiSet([nome, niver, cel, email, ctt, celctt, senha])
            valores = await AsyncStorage.multiGet([nome, niver, cel, email, ctt, celctt, senha])
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
                    
                    <Text style={styles.activityTitle}>
                        Informações do paciente:
                    </Text>
                    
                    <TextInputMask
                        type={'custom'}
                        value={this.state.NAME}
                        style={styles.input}
                        keyboardType='default'
                        placeholder='Nome completo'
                        onChangeText={text => {
                            this.setState({ NAME : text })
                        }}
                    />

                    <Text style={styles.cadastro}> Data de Nascimento </Text>
                    <TextInputMask
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        value={this.state.NASCIMENTO}
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='01/01/2000'
                        onChangeText={text => {
                            this.setState({ NASCIMENTO: text })
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
                        keyboardType='email-address'
                        placeholder=' usuário@email.com '
                        onChangeText={text => {
                            this.setState({
                            EMAIL: text
                            })
                        }}
                    />
                    <Text style={styles.cadastro}>   </Text>

                    <Text style={styles.activityTitle}>
                       Contato de emergência:
                    </Text>                  
                    
                    <TextInputMask
                        type={'custom'}
                        value={this.state.NOMEEMERGENCIA}
                        style={styles.input}
                        keyboardType='default'
                        placeholder='Nome completo do contato'
                        onChangeText={text => {
                            this.setState({ NOMEEMERGENCIA : text })
                        }}
                    /> 

                    <Text style={styles.cadastro}> Celular do contato </Text>
                    <TextInputMask
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={this.state.TELEMERGENCIA}
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder=' (99) 99999-99999 '
                        onChangeText={text => {
                            this.setState({
                            TELEMERGENCIA: text
                            })
                        }}
                    />                    
                    
                    <Text style={styles.cadastro}>   </Text>

                    <Text style={styles.activityTitle}>
                       Senha:
                    </Text>
                    <TextInputMask
                        type={'custom'}
                        value={this.state.SENHA}
                        style={styles.input}
                        keyboardType='visible-password'
                        placeholder=' ****** '
                        onChangeText={text => {
                            this.setState({
                            SENHA: text
                            })
                        }}
                    />
                    
                    <TouchableOpacity style={styles.action} onPress={this.storeCPF}>
                        <Text style={styles.actionText}>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}