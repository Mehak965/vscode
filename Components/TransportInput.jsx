import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

const TransportInput = () => {
  return (
    <View style={styles.searchBox}>
    <View style={styles.searchBox2}>
    <TextInput style={styles.input} placeholder="Where would you go?" />
<TouchableOpacity>
<Entypo name="magnifying-glass" size={24} color="#B0B0B0" style={styles.searchIcon} />
</TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.transportButton}>
      <Text style={styles.transportText}>Transport</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
    searchBox: {
        flexDirection: 'column',
        width: '90%',
        backgroundColor: '#E0F2E9',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        position: 'absolute',
        bottom: 100,
        alignItems: '',
      },
      searchBox2: {
        flexDirection: 'row',
    
      },
      input: {
        flex: 1,
        fontSize: 16,
        color: '#000',
      },
      transportButton: {
        backgroundColor: '#008955',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginLeft: 10,
        marginTop:15,
      },
      transportText: {
        color: '#fff',
        fontSize: 16,
        textAlign:"center"
      },
      searchIcon: {
        marginRight: 10,  // Space between the icon and the text input
      },
});

export default TransportInput;
