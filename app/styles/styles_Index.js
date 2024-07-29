import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
              
    },
  
    imageBackground: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      width: '100%'
    },
  
    cont0:{
      flex: 1
    },
  
    cont1:{
      flex:2
    },
  
    cont2:{
      flex:2
    },
  
    cont3:{
      flex:4
  },
    header: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 20,
      alignItems: 'center'   
    },
    
    main: {
      flex: 4,
      flexDirection: 'column',
      justifyContent:'space-around',
      gap: 50,
      alignItems: 'center'
              
    },
  
  // Inicio do estilo do inputs
    inputArea:{
      flexDirection: 'row',
      width: '90%',
      borderRadius: 5,
      borderColor: '#000',
      borderBottomWidth: 1,
      height: 50,
      alignItems: 'center'
      
    },
  
    input:{
      width: '85%',
      height: 50,
      color: '#000',
      padding: 8,
      fontSize: 14
    },
  
    icon:{
      width: '15%',
       // height: 50,
      // justifyContent: 'center',
      // alignItems: 'center'
    },
  // Fim do estilo input
  
    button: {
      flex: 1,
      flexDirection: 'colunm',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 20
          
    },
  
    bntEntrar: {
      backgroundColor:'#044D8C',
      borderRadius: 8,
      justifyContent:'center',
      alignItems:'center',
      width: 300,
      height: 50
    },
  
    entrar: {
      fontSize: 17,
      color:'#fff',
    },
  
  
  
  footer:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#044D8C',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5
  
  },
  
  texto: {
    color:'white',
    fontSize: 15
  }
  
  });

  export default styles;