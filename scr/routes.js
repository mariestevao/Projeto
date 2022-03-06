import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

import SelecionaPerfil from './Pages/SelecionaPerfil';
import LogPro from './Pages/LogPro';
import LogPaciente from './Pages/LogPaciente';
import InicioPaciente from './Pages/InicioPaciente';
import InicioProfissional from './Pages/InicioProfissional';
import CadastrarPaciente from './Pages/CadastrarPaciente';
import CadastroProfissional from './Pages/CadastroProfissional';
import Instrucao from './Pages/Instrucao';
//import EditarPaciente from './Pages/EditarPaciente';
import ContatoMedico from './Pages/ContatoMedico';
import Teleconsulta from './Pages/Teleconsulta';
import Coletas from './Pages/Coletas';
import Questionário from './Pages/Questionario';
import SurveyCompleted from './Pages/SurveyCompleted';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Selecione o Perfil" component={SelecionaPerfil}/>
                <AppStack.Screen name="Login Profissional" component={LogPro}/>
                <AppStack.Screen name="Login Paciente" component={LogPaciente}/>
                <AppStack.Screen name="Perfil Paciente" component={InicioPaciente}/>
                <AppStack.Screen name="Perfil Profissional" component={InicioProfissional}/>
                <AppStack.Screen name="Cadastrar Paciente" component={CadastrarPaciente}/>
                <AppStack.Screen name="Cadastro Profissional" component={CadastroProfissional}/>
                <AppStack.Screen name="Instrução" component={Instrucao}/>
                <AppStack.Screen name="Contato com médico" component={ContatoMedico}/>
                <AppStack.Screen name="Teleconsulta" component={Teleconsulta}/>
                <AppStack.Screen name="Coletas" component={Coletas}/>
                <AppStack.Screen name="Questionário" component={Questionário}/>
                <AppStack.Screen name="SurveyCompleted" component={SurveyCompleted}/>


            </AppStack.Navigator>
        </NavigationContainer>
    );
}