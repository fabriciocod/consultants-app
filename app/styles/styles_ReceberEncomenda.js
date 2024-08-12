import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
  
    header: {
      flexDirection: 'column',
    },

    icones: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
        marginLeft: 10,
        gap: 5,
    },

    InfoTitulo: {
      flexDirection:'row',
      alignItems:'center',
      gap: 5,
      paddingLeft: 16,
    },

    infoEncomenda: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#000',
    },
  
    infoDia: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#848282',
    },

    titulo_button:{
      flexDirection:'row',
      justifyContent:'flex-end',
      marginLeft: 10,
      gap:10,
    },

    bntReceber:{
      flexDirection: 'row',
      justifyContent:'center',
      gap:5,
      backgroundColor: '#579DD9',
      borderRadius: 4,
      alignItems: 'center',
      marginTop: 20,
      padding:10,
      width: 125,
      heght: 30
    },
  
    textReceber:{
      color: '#fff',
      fontSize: 16,
      fontWeight:'bold'
      
    },
  
  
    main: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  
    footer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: '#579DD9',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 1,
      paddingBottom: 1,
      height: 50
    },
  
    suporte: {
      color: '#fff',
      fontSize: 15,
    }

  });

export default styles;