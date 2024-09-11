import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5, Feather, MaterialIcons,Entypo } from '@expo/vector-icons';
import BottomBarLayout from '../Components/Layout/BottomBarLayout';
import TransportInput from '../Components/TransportInput';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Map Background */}
      <View style={styles.mapContainer}>
       <Text>Map</Text>

        {/* Header Icons */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton}>
            <FontAwesome5 name="bars" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationButton}>
            <Feather name="bell" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Search Box */}
       <TransportInput/>
      </View>

      {/* Bottom Navigation */}

      <BottomBarLayout/>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  map: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    position: 'absolute',
    top: 50,
  },
  menuButton: {
    backgroundColor: '#008955',
    padding: 10,
    borderRadius: 5,
  },
  notificationButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
 
 
});

export default HomeScreen;
