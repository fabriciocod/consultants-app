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
    
    });

export default styles;