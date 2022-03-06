import React, { Component } from 'react';
import { StyleSheet, Button, ScrollView, Text, TextInput, View } from 'react-native';
import { SimpleSurvey } from 'react-native-simple-survey';
import { COLORS } from '../../res/validColors';
const GREEN = 'teal';
const PURPLE = 'turquoise';

const survey = [
    {
        questionType: 'Info',
        questionText: 'Você responderá a perguntas sobre seu perfil e sobre o momento de coleta dos sinais. Aperte "Próximo" para começar.'
    },
    
    {
        questionType: 'NumericInput',
        questionText: 'Digite sua idade',
        questionId: 'idade',
        placeholderText: '42',
    },

    {
        questionType: 'SelectionGroup',
        questionText:
            'Selecione seu gênero',
        questionId: 'genero',
        options: [
            {
                optionText: 'Feminino',
                value: 'feminino'
            },
            {
                optionText: 'Masculino',
                value: 'masculino'
            },
            {
                optionText: 'Outro',
                value: 'outro'
            },
            {
                optionText: 'Prefiro não declarar',
                value: 'não declarado'
            },
        ]
    },

    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Selecione se alguma(s) das condições for verdadeira para você:',
        questionId: 'condicao',
        questionSettings: {
            maxMultiSelect: 4,
            minMultiSelect: 1,
            autoAdvance: false,
        },
        options: [
            {
                optionText: 'Grávida',
                value: 'gravidez'
            },
            {
                optionText: 'Fumante',
                value: 'fumante'
            },
            {
                optionText: 'Teve/Está com COVID',
                value: 'meals'
            },
            {
                optionText: 'nenhuma das anteriores',
                value:'nenhuma'
            }
        ]
    },

    {
        questionType: 'MultipleSelectionGroup',
        questionText: 'Selecione se tiver doenças pré-existentes:',
        questionId: 'doencas',
        questionSettings: {
            minMultiSelect: 1,
            maxMultiSelect: 10
        },
        options: [
            {
                optionText: 'Pressão Alta',
                value: 'pressão alta'
            },
            {
                optionText: 'Pressão Baixa',
                value: 'pressão baixa'
            },
            {
                optionText: 'Diabetes',
                value: 'diabetes'
            },
            {
                optionText: 'Doença Cardíaca',
                value: 'Doença Cardíaca'
            },
            {
                optionText: 'Asma',
                value: 'asma'
            },
            {
                optionText: 'Insuficiência Respiratória',
                value: 'Insuficiência Respiratória'
            },
            {
                optionText: 'Nenhuma das listadas',
                value: 'Nenhuma das listadas'
            }
        ]
    },
    
    {
        questionType: 'SelectionGroup',
        questionText:
            'Você estava em repouso durante a medição?',
        questionId: 'repouso',
        questionSettings: {
            defaultSelection: 0
        },
        options: [
            {
                optionText: 'Sim',
                value: 'repouso'
            },
            {
                optionText: 'não',
                value: 'sem repouso'
            },
        ]
    },

    {
        questionType: 'SelectionGroup',
        questionText:
            'Você havia realizado esforço físico pouco antes da medição?',
        questionId: 'esforco',
        questionSettings: {
            defaultSelection: 0
        },
        options: [
            {
                optionText: 'não',
                value: 'sem esforço físico'
            },
            {
                optionText: 'Sim',
                value: 'com esforço físico'
            },
            
        ]
    },    
    
    {
        questionType: 'TextInput',
        questionText: 'Deixe comentários que achar pertinentes.',
        questionId: 'comentarios',
        placeholderText: 'Comentários',
    },

    {
        questionType: 'Info',
        questionText: 'Para finalizar o questionário, clique em "Enviar"!'
    },
];

export default class SurveyScreen extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: GREEN,
                height: 40,
                elevation: 5,
            },
            headerTintColor: '#fff',
            headerTitle: 'Sample Survey',
            headerTitleStyle: {
                flex: 1,
            }
        };
    }

    constructor(props) {
        super(props);
        this.state = { backgroundColor: PURPLE, answersSoFar: '' };
    }

    onSurveyFinished(answers) {
        /** 
         *  By using the spread operator, array entries with no values, such as info questions, are removed.
         *  This is also where a final cleanup of values, making them ready to insert into your DB or pass along
         *  to the rest of your code, can be done.
         * 
         *  Answers are returned in an array, of the form 
         *  [
         *  {questionId: string, value: any},
         *  {questionId: string, value: any},
         *  ...
         *  ]
         *  Questions of type selection group are more flexible, the entirity of the 'options' object is returned
         *  to you.
         *  
         *  As an example
         *  { 
         *      questionId: "favoritePet", 
         *      value: { 
         *          optionText: "Dogs",
         *          value: "dog"
         *      }
         *  }
         *  This flexibility makes SelectionGroup an incredibly powerful component on its own. If needed it is a 
         *  separate NPM package, react-native-selection-group, which has additional features such as multi-selection.
         */

        const infoQuestionsRemoved = [...answers];

        // Convert from an array to a proper object. This won't work if you have duplicate questionIds
        const answersAsObj = {};
        for (const elem of infoQuestionsRemoved) { answersAsObj[elem.questionId] = elem.value; }

        this.props.navigation.navigate('SurveyCompleted', { surveyAnswers: answersAsObj });
    }

    /**
     *  After each answer is submitted this function is called. Here you can take additional steps in response to the 
     *  user's answers. From updating a 'correct answers' counter to exiting out of an onboarding flow if the user is 
     *  is restricted (age, geo-fencing) from your app.
     */
    onAnswerSubmitted(answer) {
        this.setState({ answersSoFar: JSON.stringify(this.surveyRef.getAnswers(), 2) });
        switch (answer.questionId) {
            case 'favoriteColor': {
                if (COLORS.includes(answer.value.toLowerCase())) {
                    this.setState({ backgroundColor: answer.value.toLowerCase() });
                }
                break;
            }
            default:
                break;
        }
    }

    renderPreviousButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={GREEN}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={GREEN}
                    title={'VOLTAR'}
                />
            </View>
        );
    }

    renderNextButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={GREEN}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={GREEN}
                    title={'Próximo'}
                />
            </View>
        );
    }

    renderFinishedButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    title={'Enviar'}
                    onPress={onPress}
                    disabled={!enabled}
                    color={GREEN}
                />
            </View>
        );
    }

    renderButton(data, index, isSelected, onPress) {
        return (
            <View
                key={`selection_button_view_${index}`}
                style={{ marginTop: 5, marginBottom: 5, justifyContent: 'flex-start' }}
            >
                <Button
                    title={data.optionText}
                    onPress={onPress}
                    color={isSelected ? GREEN : PURPLE}
                    style={isSelected ? { fontWeight: 'bold' } : {}} 
                    key={`button_${index}`}
                />
            </View>
        );
    }

    renderQuestionText(questionText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text numLines={1} style={styles.questionText}>{questionText}</Text>
            </View>
        );
    }

    renderTextBox(onChange, value, placeholder, onBlur) {
        return (
            <View>
                <TextInput
                    style={styles.textBox}
                    onChangeText={text => onChange(text)}
                    numberOfLines={1}
                    underlineColorAndroid={'white'}
                    placeholder={placeholder}
                    placeholderTextColor={'rgba(184,184,184,1)'}
                    value={value}
                    multiline
                    onBlur={onBlur}
                    blurOnSubmit
                    returnKeyType='done'
                />
            </View>
        );
    }

    renderNumericInput(onChange, value, placeholder, onBlur) {
        return (<TextInput 
            style={styles.numericInput}
            onChangeText={text => { onChange(text); }}
            underlineColorAndroid={'white'}
            placeholderTextColor={'rgba(184,184,184,1)'}
            value={String(value)}
            placeholder={placeholder}
            keyboardType={'numeric'}
            onBlur={onBlur}
            maxLength={3}
        />);
    }

    renderInfoText(infoText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={styles.infoText}>{infoText}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={[styles.background, { backgroundColor: this.state.backgroundColor }]}>
                <View style={styles.container}>
                    <SimpleSurvey
                        ref={(s) => { this.surveyRef = s; }}
                        survey={survey}
                        renderSelector={this.renderButton.bind(this)}
                        containerStyle={styles.surveyContainer}
                        selectionGroupContainerStyle={styles.selectionGroupContainer}
                        navButtonContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around' }}
                        renderPrevious={this.renderPreviousButton.bind(this)}
                        renderNext={this.renderNextButton.bind(this)}
                        renderFinished={this.renderFinishedButton.bind(this)}
                        renderQuestionText={this.renderQuestionText}
                        onSurveyFinished={(answers) => this.onSurveyFinished(answers)}
                        onAnswerSubmitted={(answer) => this.onAnswerSubmitted(answer)}
                        renderTextInput={this.renderTextBox}
                        renderNumericInput={this.renderNumericInput}
                        renderInfo={this.renderInfoText}
                    />
                    
                </View>
                
                <ScrollView style={styles.answersContainer}>
                    <Text style={{textAlign:'center'}}>JSON output</Text>
                    <Text>{this.state.answersSoFar}</Text>
                </ScrollView>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        
        elevation: 20,
        borderRadius: 10,
        flex: 1, 
    },
    answersContainer: {
        width: '90%',
        maxHeight: '20%',
        marginTop: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
    },
    surveyContainer: {
        width: 'auto',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignContent: 'center',
        padding: 5,
        flexGrow: 0,
    },
    selectionGroupContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        alignContent: 'flex-end',
    },
    background: {
        flex: 1,
        minHeight: 800,
        maxHeight: 800,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
    textBox: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
        borderRadius: 10,
        
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    numericInput: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    infoText: {
        marginBottom: 20,
        fontSize: 20,
        marginLeft: 10
    },
});
