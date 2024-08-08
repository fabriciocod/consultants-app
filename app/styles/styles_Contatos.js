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
        fontSize: 19,
        color: '#000',
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
        backgroundColor: '#579DD9',
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginLeft: 16,
    },
    
    textContato: {
        color: '#fff',
        fontSize: 16,
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