import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        alignItems: 'center'
    },

    header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
            marginTop: 20
    },

    logo: {
        width:300,
        height:300,
    },

    title: {
        fontSize: 30,
        color: '#13131a',
        fontWeight: 'bold'
    },

    nomesTitle: {
        fontSize: 12,
        lineHeight: 20,
        marginTop: 100,
        marginBottom: 12,
        color: '#737380'
    },
    
    nomes: {
        fontSize: 10,
        lineHeight: 20,
        marginLeft: 10,
        marginBottom: 5,
        color: '#737380'
    },

    activityTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'justify',
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

});