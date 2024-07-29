import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    
},

  cont1: {
    flex: 1,
},

  cont2:{
    flex: 1,
},

  header: {
    flex: 2.7,
    backgroundColor: '#044d8c',
    flexDirection: 'row',
    justifyContent: 'space-between',

},
  
  perfil: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 50,
    alignItems: 'center',
    gap: 10,
    paddingLeft: 16
    
},

  usuario: {
    fontSize: 19,
    color: '#fff'
},

  usarioFuncao: {
    fontSize: 12,
    color: '#848282'
},

  icones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#044D8C',
    marginLeft: 10,
    gap: 5

},

  main: {
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    
},

  menu: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    gap: 10
},

  card:{
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#808080',
    padding: 10,
    width: 100,
    height: 120,
    backgroundColor: '#fff',
    shadowColor: '#000',

    shadowOffset: {
    width: 0,
    height: 2,
},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
},
  

  topico:{
    fontSize: 14,
    color: '#808080',
    
},


  footer:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#044D8C',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 1,
    paddingBottom: 1,  
},

  suporte: {
    color:'#fff',
    fontSize: 15,
}

});

export default styles;