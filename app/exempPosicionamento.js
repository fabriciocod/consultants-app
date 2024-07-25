import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FlexboxExample = () => {
  return (
    <View style={styles.container}>
        <ScrollView style={styles.ScrollView}>
            <View style={{flex: 1}}>
                <Text style={styles.box1}>Box 1</Text>
            </View>
            <View style={{flex: 2}}>
                <Text style={styles.box2}>Box 2</Text>
                    <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor='#000'
                    />

                    <Ionicons style={styles.icon} name='mail-outline' color='#000' size={25} />
            </View>
            <View style={{flex: 3}}>
                <Text style={styles.box3}>Box 3</Text>
            </View>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },



//   box:{
//     flex: 1,
//     flexDirection:'column',
//     justifyContent:'space-between',
//     alignItems:'center'
//   },
  box1: {
    
    width: '85%',
    height: 120,
    backgroundColor: '#ff0000',
  },
  box2: {
    
    width: '85%',
    height: 510,
    backgroundColor: '#00ff00',
  },
  box3: {
    
    width: '85%',
    height: 55,
    backgroundColor: '#0000ff',
  },
});

export default FlexboxExample;
