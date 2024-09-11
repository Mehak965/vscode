import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
const BottomBarLayout = () => {
    const navigation = useNavigation(); 
  const { height, width } = Dimensions.get('window');

  return (
    <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navButton}>
      <FontAwesome5 name="home" size={24} color="#008955" />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton}>
      <Feather name="heart" size={24} color="#aaa" />
      <Text style={styles.navText}>Favourite</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButtonCenter}>
      <FontAwesome5 name="wallet" size={28} color="#fff" />
      <Text style={styles.navTextCenter}>Wallet</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton}>
      <Feather name="gift" size={24} color="#aaa" />
      <Text style={styles.navText}>Offer</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton}>
      <MaterialIcons name="person-outline" size={24} color="#aaa" />
      <Text style={styles.navText}>Profile</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
    bottomNav: {
        height: 70,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      navButton: {
        alignItems: 'center',
      },
      navButtonCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#008955',
        width: 70,
        height: 70,
        borderRadius: 10,
        marginTop: -30,
      },
      navText: {
        fontSize: 12,
        color: '#aaa',
        marginTop: 5,
      },
      navTextCenter: {
        fontSize: 12,
        color: '#fff',
        marginTop: 5,
      },
});

export default BottomBarLayout;
