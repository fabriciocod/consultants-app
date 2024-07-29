import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
      flex:1,
      flexDirection:'column',
      justifyContent:'space-around',
      // backgroundColor: '#fff'
  },

  imageBackground: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      width: '100%'
  },

  cont1: {
    flex:2
  },

  cont2:{
    flex:1
  },

  cont3:{
    flex:2
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
    flexDirection:'column',
    justifyContent:'space-around',
    gap: 20,
    padding:20
  },

  titulo:{
    fontSize:20,
    paddingLeft:20
  },

  informe:{
    fontSize:15,
    padding: 20,
    marginTop: -15,
    
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
  
  input:{
    alignItems: 'left',
    fontSize: 14,
    
    // borderRadius:8,
    backgroundColor:'#fff',
    justifyContent:'space-around',
    // padding:20,
    // height:20
    width: 150
  },

  button:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  bntconfirmar:{
      backgroundColor:'#044D8C',
      borderRadius: 10,
      justifyContent:'center',
      alignItems:'center',
      width: 188,
      height: 50
  },
  
  confirmar:{
      color: '#fff'
  }

});


export default styles;