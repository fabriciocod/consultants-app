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
    },

    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: '#f0f0f0',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        marginTop: 17,
        marginBottom: 12,
    },
    
    searchInput: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
        
    },
    
    searchIcon: {
        marginLeft: 10,
    },
    
    InfoTitulo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16
    },
    
    infoContato: {
        color: '#000',
        fontSize: 25,
        fontWeight:'bold',
        
    },
    
    bntContato: {
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: '#579DD9',
        borderRadius: 4,
        gap:5,
        marginLeft: 16,
        paddingVertical: 10,
        paddingHorizontal: 25,
        
    },
    
    textContato: {
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#579DD9',
        // padding: 2,
        paddingLeft: 16,
        height: 50
    },
    
    // Styles CardContatos
    container_Card:{
        flexDirection:'column',
        // backgroundColor: 'gray',
        padding: 10,
    },
      
    card_contato:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderColor:'#808080',
        borderBottomWidth:2,
        // backgroundColor:'#fff',   
    },
      
    info_contato:{
        flexDirection:'column',
        // backgroundColor:'red',
        paddingVertical:20,
        width:'90%',
          // height:100
    },
      
    nova_encomenda:{
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red'
    },
      
    container_editar_excluir:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        // backgroundColor:'yellow',
        gap:20,
        paddingVertical:25,
        height: 40
    },
      
    title:{
        // backgroundColor:'#fff',
        fontSize:20,
        fontWeight:'bold'
    },
      
    rotulos:{
        flexDirection:'row',
        justifyContent:'space-between',
         paddingVertical:8,
        // backgroundColor:'gray'
    },
      
    label:{
        fontSize:12,
        fontWeight:'bold'
    },
      
    contact_unit:{
        flexDirection:'row',
        justifyContent:'flex-end',
        // backgroundColor:'blue'
    },
        
    editar:{
        backgroundColor:'#579DD9',
        borderRadius: 4,
        paddingVertical:4,
        paddingHorizontal:4
    },
        
    excluir:{
        backgroundColor:'#6D0909',
        borderRadius: 4,
        paddingVertical:4,
        paddingHorizontal:4
    }
      
    });
 

export default styles;