import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
  
    header: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      paddingHorizontal: 16,
      marginBottom: '8%',
    },
  
    seachContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      paddingHorizontal: 10,
      marginTop: '2%',
      marginBottom: '1%',
    },
  
    seachInput: {
      flex: 1,
      fontSize: 16,
      fontFamily: 'JejuGothic-Regular',
      paddingVertical: 0
    },
  
    searchIcon: {
      marginLeft: 10,
    },
  
    informacao: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginBottom: '5%',
    },
  
    textoInformativo: {
      fontSize: 13,
      fontFamily: 'JejuGothic-Regular',
      color: '#808080',
      alignItems: 'center',
    },
  
    infoTitulo: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    },
  
    infoRelatorio: {
      fontSize: 22,
    },
  
    main: {
      flexDirection: 'column',
      marginLeft: '1%',
      //alignItems:'',
      //backgroundColor: 'green'
    },
  
    buscar: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginLeft: '7%',
      marginBottom: '3%',
    },
  
    textoBuscar: {
      fontSize: 13,
      fontFamily: 'JejuGothic-Regular',
      color: '#808080',
    },
  
    bnt_Status: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      gap: 1,
      marginBottom:5
    },
  
    bntAguardando: {
      backgroundColor: '#fff',
      borderColor: '#6D0909',
      borderWidth: 2,
      alignItems: 'center',
      padding: 5,
      width: 130,
    },
  
    bntEntregue: {
      backgroundColor: '#fff',
      borderColor: '#157306',
      borderWidth: 2,
      alignItems: 'center',
      padding: 5,
      width: 130,
    },
  
    textoAguardando: {
      color: '#6D0909',
    },
  
    textoEntregue: {
      color: '#157306',
    },
  
    bntPendente: {
      backgroundColor: '#fff',
      borderColor: '#D1C23B',
      borderWidth: 2,
      alignItems: 'center',
      padding: 5,
      width: 130,
    },
  
    bntPendenteView: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginLeft: '7%',
    },
  
    textoPendente: {
      color: '#D1C23B',
    },
  
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#579DD9',
      paddingHorizontal: 20,
      paddingVertical: 10,
      maxHeight: 50,
    },
  });

export default styles