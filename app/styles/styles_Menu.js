import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
},

// Inicio do Componente Header
header:{
backgroundColor:'#044d8c',
maxHeight: 400,
marginTop: 25
},

icones:{
flexDirection:'row',
justifyContent: 'flex-end',
alignContent:'space-around',
marginTop: 5,
marginRight:16,
gap:5
},

info_perfil_usuario:{
flexDirection:'row',
alignItems:'center',
marginLeft:16,
marginBottom: 16,
gap: 15
},

usuario: {
color: '#fff',
fontSize: 25,
fontWeight:'bold'

},

usuarioFuncao:{
fontSize: 12,
color:'#848282'
},
// Fim do Componente Header

// Inicio do Componente Main
main:{
flexDirection: 'row',
justifyContent: 'space-around',
marginTop: 25
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

icon_topico:{
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
},

topico:{
  textAlign:'center'
},
// Fim do Componente Main

// Inicio do Componente Footer

footer:{
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: '#044D8C',
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 1,
  paddingBottom: 1, 
  maxHeight:50 
},

suporte: {
  color:'#fff',
  fontSize: 15,
  fontWeight:'bold'
},
// Fim do Componente Footer
});

export default styles;