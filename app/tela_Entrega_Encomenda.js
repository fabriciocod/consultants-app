import { Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import styles from './styles/styles_Entrega';


const tela_Entrega_Encomenda = () => {
    const router = useRouter();
return (
    <View style={styles.container}>
        <View style={[styles.header, {flex:1}]}>
            <Ionicons name="cube-outline" size={50} color="#0C3854" />
            <Text style={styles.titulo}>Entrega Encomendas</Text>
        </View>

        <View style={[styles.main, {flex:5}]}>
            <Text style={styles.contato}>Nome Contato</Text>
        <View style={styles.container_entrega}>

        <View style={styles.rotulo_contato_data_hora}>
            <Text style={styles.numero_contato}>Contato:</Text>
            <Text style={styles.data_hora}>Data / Hora:</Text>
        </View>

        <View style={styles.info_contato_data_hora}>
            <Text style={styles.numero}>(xxx)xxxxx-xxxx</Text>
            <Text style={styles.hora_data}>00/00/00 | 00:00h</Text>
        </View>

        <View style={styles.rotulo_prioridade_tipo}>
            <Text style={styles.prioridade}>Prioridade:</Text>   
        <Text style={styles.tipo}>Tipo:</Text>
        
        </View>

        <View style={styles.info_prioridade_tipo}>
            <Text style={styles.classe_prioridade}>Alta</Text>
            <Text style={styles.classe_tipo}>Documento</Text>
        </View>

        <View style={styles.rotulo_descricao}>
            <Text style={styles.descricao}>Descrição</Text>
            <Text style={styles.classe_descricao}>Descrição da encomenda</Text>
        </View> 
        
    </View>

    <View style={styles.container_status}>
        <Text style={styles.idContato}>ID: xxxx</Text>
        <Text style={styles.statusEntrega}>Entrega</Text>
    </View>

    <View style={styles.container_bntEntregar}>
        <Pressable onPress={() => 
        router.push('/tela_Assinatura')
        }>
        <Text style={styles.bntEntregar}>Entrega</Text>
        </Pressable>
    </View>
    </View>

    <View style={[styles.footer, {flex:0.4}]}>
    <Pressable onPress={() => 
        router.push('/telaReceberEncomenda')
        }>
        <Ionicons name='chevron-back-outline' size={24} color="#fff" />
        </Pressable>
    </View>

    </View>
);
}

export default tela_Entrega_Encomenda