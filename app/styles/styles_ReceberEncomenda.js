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

      titulo_button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
      },
    
    InfoTitulo: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
    //   alignItems: 'center',
      gap: 5,
      paddingLeft: 16,
    },
  
    infoEncomenda: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#000',
    },
  
    infoDia: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#848282',
    },
  
   
  
    button:{
      marginLeft: 16,
    },
  
    bntReceber:{
      backgroundColor: '#579DD9',
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 20,
      paddingTop: 5,
      paddingBottom:5,
      width: 125,
      heght: 30
    },
  
    textReceber:{
      color: '#fff',
      fontSize: 16,
      
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