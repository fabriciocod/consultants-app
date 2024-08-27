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
        flexDirection: 'column',
    },

    notificacao:{
        textAlign:'center',
        textAlignVertical:'center',
        textAlignHorizontl:'center',
        fontSize:15,
        color:'#808080'
    },
    // Inicio CardContatos
    container_cards:{
        flexDirection:'column',
        // backgroundColor: 'gray',
        padding: 10,
    },
    
    container_contatos:{
        flexDirection:'column',
        // backgroundColor:'#fff'
    },

    info_contato:{
        flexDirection:'row',
        alignItems:'center',
        borderColor:'#888888',
        borderBottomWidth:2
    },

    contato:{
        width:'90%',
        // backgroundColor:'red'
    },

    title:{
        fontSize:25,
        fontWeight:'bold',
        paddingVertical:4
    },

    rotulos:{
        flexDirection:'row',
        justifyContent:'space-between',
    },

    label:{
        fontSize:14,
        fontWeight:'bold',
        paddingVertical:1
    },

    contato_unidade:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    dados_contato:{
        fontSize:16,
        paddingVertical:2
    },

    bnt_editar_excluir:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        gap:20,
        height:40
    },

    editar:{
        backgroundColor:'#579DD9',
        borderRadius:4,
        paddingVertical: 4,
        paddingHorizontal:4
    },

    excluir:{
        backgroundColor:'#6D0909',
        borderRadius:4,
        paddingVertical: 4,
        paddingHorizontal:4
    },
    // Fim CardContatos
    
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#579DD9',
        // padding: 2,
        paddingLeft: 16,
        height: 50
    },
    
    });


export default styles;