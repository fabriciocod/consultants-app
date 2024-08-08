import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
      // padding: 8,
    },

    cadContato: {
        marginTop:15
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    contato: {
        fontSize: 20,
        fontWeight:'bold',
        color: '#000',
        marginLeft:16,
        marginTop:16
    },

    bntAddContato: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },

    bntContato: {
        backgroundColor: '#579DD9',
        borderRadius: 15,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: 125,
        marginBottom:10,
        marginRight:16
    },

    textContato: {
        fontSize: 15,
        color: '#fff',
    },

    main: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    infoNomeContato: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 5,
        borderBottomWidth: 1,
        borderColor: '#bbb',
        marginTop: 15,
        marginBottom: 20,
    },

    inputNome: {
        width:313,
        padding:5
    },

    infoContUni: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // borderBottomWidth: 1,
        borderColor:'#bbb',
        padding: 5,
        marginTop: 15,
        marginBottom: 20,
    },

    inputContato: {
        width:154,
        borderBottomWidth: 1,
        borderColor:'#bbb',
        padding:10
    },
    inputUnidade: {
        width:150,
        padding:10,
        borderBottomWidth: 1,
        borderColor:'#bbb'
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#579DD9',
        padding: 10,
        maxHeight: 50,
    },
});

export default styles;