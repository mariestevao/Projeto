import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const GREEN = 'teal';
const PURPLE = 'turquoise';
const defaultAnswers = { comentarios: 'nada' };

export default class SurveyCompletedScreen extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: GREEN,
                height: 40,
                elevation: 5,
            },
            headerTintColor: '#fff',
            headerTitle: 'Respostas do questionário',
            headerTitleStyle: {
                flex: 1,
            }
        };
    }

    render() {
        const answers = this.props.navigation.getParam('surveyAnswers', defaultAnswers);

        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={styles.questionText}>Respostas submetidas</Text>
                        <Text style={styles.questionText}>Idade: {answers.idade.value}</Text>
                        <Text style={styles.questionText}>Gênero: {answers.genero.value}</Text>
                        <Text style={styles.questionText}>Condição(ões): {answers.condicao.value}</Text>
                        <Text style={styles.questionText}>Doenças pré-existentes: {answers.doencas.value}</Text>
                        <Text style={styles.questionText}>Durante medição: {answers.repouso.value} e {answers.esforco.value}</Text>
                        <Text style={styles.questionText}>Comentários: {answers.comentarios}</Text>
                        <Text>Raw JSON: {JSON.stringify(this.props.navigation.getParam('surveyAnswers', {}))}</Text>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PURPLE,
    },
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
        maxHeight: '80%',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
});