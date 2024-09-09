import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import avatar from '../assets/Images/avatar.png';
import CustomDropdown from './CustomDropdown';

const { width } = Dimensions.get('window');

const ProfileForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const cities = [
    { label: 'Islamabad', value: 'islamabad' },
    { label: 'Lahore', value: 'lahore' },
    { label: 'Peshawar', value: 'peshawar' },
  ];

  const districts = [
    { label: 'District 1', value: 'district1' },
    { label: 'District 2', value: 'district2' },
    { label: 'District 3', value: 'district3' },
  ];

  const openCameraOrGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("Permission to access camera is required!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.profileIconContainer}>
        <Image
          source={selectedImage ? { uri: selectedImage } : avatar}
          style={styles.avatarImage}
        />
        <TouchableOpacity style={styles.uploadIcon} onPress={() => Alert.alert(
          "Select Image",
          "Choose an option",
          [
            { text: "Open Camera", onPress: openCamera },
            { text: "Choose from Gallery", onPress: openCameraOrGallery },
            { text: "Cancel", style: "cancel" }
          ]
        )}>
          <Entypo name="camera" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <TextInput placeholder="Full Name" style={styles.input} />
      <TextInput placeholder="Your mobile number" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Street" style={styles.input} />

      <CustomDropdown
        data={cities}
        selectedValue={selectedCity}
        onValueChange={(item) => setSelectedCity(item)}
        placeholder="Select City"
      />

      <CustomDropdown
        data={districts}
        selectedValue={selectedDistrict}
        onValueChange={(item) => setSelectedDistrict(item)}
        placeholder="Select District"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: 50,
    marginBottom: 20,
  },
  backText: {
    fontSize: 16,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  profileIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarImage: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: (width * 0.4) / 2,
    backgroundColor: '#ddd',
  },
  uploadIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#008955',
    borderRadius: 20,
    padding: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: '#008955',
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  cancelButtonText: {
    color: '#008955',
    fontSize: 18,
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#008955',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ProfileForm;
