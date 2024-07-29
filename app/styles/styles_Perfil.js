import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#044d8c',
    },
    cont1: {
        flex: 1,
    },
    cont2: {
        flex: 1,
    },
    header: {
        flex: 2,
        backgroundColor: "#044d8c",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    perfAvatar: {
        alignItems: 'center',
    },
    avatarImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },

    altera: {
        fontSize: 12,
        color: '#fff',
        marginTop: 8,
    },
    main: {
        flex: 10,
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
        flex: 1,
        color: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontSize: 16,
    },
    icon: {
        padding: 10,
    },
    cont_Altera: {
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
    footer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: '#044d8c',
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 50
    },
    desconectar: {
        color: '#fff',
        fontSize: 16,
    },
});

export default styles;