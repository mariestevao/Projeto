import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

import SelecionaPerfil from './Pages/SelecionaPerfil';
import LogPro from './Pages/LogPro';
import LogPaciente from './Pages/LogPaciente';
import InicioPaciente from './Pages/InicioPaciente';
import InicioProfissional from './Pages/InicioProfissional';
import CadastroPaciente from './Pages/CadastroPaciente';
import CadastroProfissional from './Pages/CadastroProfissional';
import Instrucao from './Pages/Instrucao';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Selecione o Perfil" component={SelecionaPerfil}/>
                <AppStack.Screen name="Login Profissional" component={LogPro}/>
                <AppStack.Screen name="Login Paciente" component={LogPaciente}/>
                <AppStack.Screen name="Perfil Paciente" component={InicioPaciente}/>
                <AppStack.Screen name="Perfil Profissional" component={InicioProfissional}/>
                <AppStack.Screen name="Cadastro Paciente" component={CadastroPaciente}/>
                <AppStack.Screen name="Cadastro Profissional" component={CadastroProfissional}/>
                <AppStack.Screen name="Instrução" component={Instrucao}/>

            </AppStack.Navigator>
        </NavigationContainer>
    );
}