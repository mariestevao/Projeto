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
    
    seta: {
        marginTop: '10%',
        marginLeft: "1%",
        alignSelf: "flex-start",
        color: "#00CCC1",
    },

    input:{
       // marginTop: '5%',
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


    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20
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
    
    action: {
        backgroundColor: '#00CCC1',
        borderRadius: 30,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,

    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    title: {
        fontSize: 30,
        color: '#13131a',
        fontWeight: 'bold',
    },

    underline:{
    fontSize: 15,
    color: '#13131a',
    fontWeight: 'bold'
    },

    activityTitle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#13131a',
        lineHeight: 30,
        marginBottom:'3%',
        marginTop:'5%',
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
        marginBottom:'1%',
        marginTop:'5%',
    },

    
    titulo: {
        color: "#1E1E1E",
        fontWeight: "400",
        fontSize: 16,
        marginBottom: "5%",
    },

    subTitulo: {
        color: "#1E1E1E",
        fontWeight: "600",
        fontSize: 16,
    },

    logo: {
        height: 100,
        width: 100,
        marginBottom: "7%",
    },


});
