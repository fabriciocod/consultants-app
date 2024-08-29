import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from './styles/styles_Assinatura';


const tela_Assinatura = () => {
    return (
    <View style={styles.container}>
    <View style={[styles.header, {flex:1}]}>
        <Pressable style={styles.bntLimpar}>
            <MaterialCommunityIcons name="broom" size={24} color="#888888" />
            <Text style={styles.limpar}>Limpar</Text>
        </Pressable>
    </View>

    <View style={[styles.main, {flex:5}]}>
        <View style={styles.container_assinatura}>

        <View style={styles.rotulo_assinatura}>
            <Text style={styles.assinatura}>Nome do recebedor</Text>
        </View> 
        
        </View>  

    </View>

    <View style={[styles.footer, {flex:0.5}]}>
        <Pressable onPress={() => 
        router.push('/')
        }>
        <Text style={styles.bntSalvar}>Salvar</Text>
        </Pressable>
    </View>

        </View>
    );
}

export default tela_Assinatura;