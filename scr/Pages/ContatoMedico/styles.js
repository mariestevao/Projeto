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
            marginTop: -40,
            marginBottom: 10
    },

    logo: {
        width:100,
        height:100,
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

    actions: {
        marginTop: 12,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    action: {
        flexDirection: 'row',
        backgroundColor: '#00CCC1',
        borderRadius: 30,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,

    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    nomesTitle: {
        fontSize: 12,
        lineHeight: 20,
        marginTop: 100,
        marginBottom: 12,
        color: '#737380'
    },
    
    instrucao:{
        fontSize: 16,
        color: '#00CCC1',
        justifyContent: 'center',
        alignItems:'center',
        marginBottom:'1%',
        marginTop:'1%',
    },

});