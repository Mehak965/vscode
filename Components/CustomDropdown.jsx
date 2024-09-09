import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons'; // Using vector icons for dropdown arrow

const CustomDropdown = ({ data, selectedValue, onValueChange, placeholder }) => {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleDropdown = () => {
      setIsVisible(!isVisible);
    };
  
    const handleSelect = (item) => {
      onValueChange(item);
      setIsVisible(false);
    };
  
    return (
      <View>
        <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
          <Text style={styles.dropdownButtonText}>
            {selectedValue ? selectedValue.label : placeholder}
          </Text>
          <Entypo name="chevron-down" size={20} color="black" />
        </TouchableOpacity>
  
        {isVisible && (
          <Modal
            transparent={true}
            animationType="fade"
            visible={isVisible}
            onRequestClose={toggleDropdown}
          >
            <TouchableOpacity style={styles.modalOverlay} onPress={toggleDropdown}>
              <View style={styles.dropdown}>
                <FlatList
                  data={data}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.dropdownItem}
                      onPress={() => handleSelect(item)}
                    >
                      <Text style={styles.dropdownItemText}>{item.label}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item.value.toString()}
                />
              </View>
            </TouchableOpacity>
          </Modal>
        )}
      </View>
    );
  };

const styles = StyleSheet.create({
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom:10
  },
  dropdownButtonText: {
    fontSize: 16,
    color: '#000',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  dropdown: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#000',
  },
});

export default CustomDropdown;
