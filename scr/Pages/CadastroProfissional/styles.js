import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#fff',
    },

    logo: {
        marginTop: 5,
        width: 200,
        height: 200,
        marginBottom: '10%',
    },
    
    input:{
        marginTop: 10,
        marginBottom: 5,
        padding: 10,
        width: '70%',
        backgroundColor:'lightcyan',
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },

    action: {
        backgroundColor: '#00CCC1',
        borderRadius: 30,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,

    },

    header: {
        marginTop: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    volta:{
        fontSize: 16,
        color: '#fff',
        //marginLeft:110,
        width: '100%',
        justifyContent: 'flex-start',
        marginLeft: '5%',
        marginBottom: '10%',

    },

    volta2:{
        fontSize: 16,
        color: '#00CCC1',
        marginTop: - 23,
        marginLeft: 30,
        width: '80%',
    },

    blococadastro:{
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 5,
        width: '80%',

    },

    cadastro:{
        fontSize: 16,
        color: '#00CCC1',
        marginTop: 25,
        justifyContent: 'center',
        alignItems:'center',
    },
});
