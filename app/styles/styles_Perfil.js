import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#044d8c',
    },

    header:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    
    alterar:{
        fontSize: 10,
        color:'#fff'
    },
    
    main:{
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    
    infoStatus: {
        marginBottom: 20,
    },
    
    textVoce: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
    },
    textColabora: {
        fontSize: 16,
        color: '#bbb',
    },
    infoCodigo: {
        marginBottom: 20,
    },
    login: {
        fontSize: 18,
        color: '#fff',
        fontWeight:'bold'
    },
    codigo: {
        fontSize: 14,
        color: '#bbb',
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        paddingTop: 5,
        },
    
    alteraSenha: {
        marginBottom: 20,
    },
    
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        marginBottom: 20,
    },
    
    input: {
        flex:1,
        color: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontSize: 16,
    },
    
    icon: {
        padding: 10,
    },
    
    cont_redefinir: {
        alignItems: 'center',
    },
    
    bntRedefinir: {
        backgroundColor: '#fff',
        borderRadius: 5,
        width: '100%',
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    
    redefinirSenha: {
        fontSize: 16,
        color: '#044d8c',
        fontWeight: 'bold',
    },
    
    footer:{
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: '#044d8c',
        paddingHorizontal: 20,
        paddingVertical: 10,
        maxHeight:50
    },
    desconectar: {
        color: '#fff',
        fontSize: 16,
    }
    
    });

export default styles;