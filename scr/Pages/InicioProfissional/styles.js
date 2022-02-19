import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems:'center',
        backgroundColor: '#fff',
    },

    logo: {
        marginTop: 50,
        width: 300,
        height: 300,
    },
    
    input:{
        marginTop: 30,
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

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    action: {
        marginTop: 10,
        backgroundColor:'#00CCC1',
        borderRadius: 30,
        height: 50,
        width: '65%',
        justifyContent: 'center',
        alignItems: 'center',

    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    logo: {
        marginTop: '5%',
        marginBottom: '5%',
        width: 200,
        height: 200,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop:20,
    },

    action: {
        backgroundColor: '#00CCC1',
        borderRadius: 30,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,

    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    volta:{
        fontSize: 16,
        color: '#fff',
        marginTop: 50,
        marginLeft:'15%',
        width: '80%',
        alignItems: 'flex-end',
        marginRight: 40

    },

    title: {
        fontSize: 30,
        color: '#13131a',
        fontWeight: 'bold'
    },

    activityTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    information: {
        fontSize: 20,
        color: '#13131a',
        lineHeight: 50,
        alignItems:'baseline',
        justifyContent: 'flex-start',
        backgroundColor: 'lightcyan',
        width: '70%',
        marginBottom: '2%',
    },

    saida:{
        fontSize: 16,
        color: '#00CCC1',
    },

    blococadastro:{
        justifyContent: 'center',
        alignItems:'center',
        width: '80%',

    },

    cadastro:{
        fontSize: 16,
        color: '#00CCC1',
        justifyContent: 'center',
        alignItems:'center',
        marginBottom:'2%',
    },
});
