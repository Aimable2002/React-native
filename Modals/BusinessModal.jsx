import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

import DateTimePicker from '@react-native-community/datetimepicker';

const BusinessModal = () => {

    const [inputValue, setInputValue] = useState({
        Start_date: new Date(),  // Initialize with current date
        End_date: new Date(),    // Initialize with current date
    });
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [image, setImage] = React.useState(null);

  const handleChange = (name, value) => {
    setInputValue(prevState => ({ ...prevState, [name]: value }));
  };

  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    } else {
      Alert.alert('No image selected');
    }
  };

  const handleDateChange = (name, event, selectedDate) => {
    if (selectedDate) {
        handleChange(name, selectedDate);
    }
};
  return (
        <View style={{flexDirection: 'column', marginTop: 10}}>
            {['Business_Category', 'Description', 'Product', 'Amount', 'Quantity', 'Add_photo'].map((field) => (
                field === 'Business_Category' ? (
                    <View key={field} style={styles.inputContainer}>
                        <Picker
                            selectedValue={selectedCategory}
                            onValueChange={(itemValue) => {
                                setSelectedCategory(itemValue);
                                handleChange(field, itemValue);
                            }}
                            style={styles.picker}
                        >
                            <Picker.Item label="Select Business Category" value="" />
                            <Picker.Item label="Art" value="Art" />
                            <Picker.Item label="IT Field" value="IT Field" />
                            <Picker.Item label="Delivery" value="Delivery" />
                            <Picker.Item label="Producer" value="Producer" />
                            <Picker.Item label="Agri-business" value="Agri_business" />
                            <Picker.Item label="Services" value="Services" />
                            <Picker.Item label="Others" value="Others" />
                        </Picker>
                    </View>
                ) : field === 'Description' ? (
                    <TextInput
                        key={field}
                        value={inputValue[field]}
                        onChangeText={(text) => handleChange(field, text)}
                        placeholder="Description"
                        multiline
                        numberOfLines={4}
                        style={styles.textarea}
                    />
                ) : field === 'Add_photo' ? (
                    <View key={field} style={styles.photoContainer}>
                        <TouchableOpacity onPress={handleImagePick} style={styles.photoButton}>
                            <Text style={styles.photoText}>Add Photo</Text>
                        </TouchableOpacity>
                        {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
                    </View>
                ) : (
                    <TextInput
                        key={field}
                        value={inputValue[field]}
                        onChangeText={(text) => handleChange(field, text)}
                        placeholder={field.replace('_', ' ')}
                        keyboardType={field === 'Amount' ? 'numeric' : 'default'}
                        style={styles.input}
                    />
                )
            ))}
        <View style={{marginTop: 10}}>
            <Button 
                title='Submit'
            />
        </View>
    </View>
  )
}

export default BusinessModal



const styles = StyleSheet.create({
    inputContainer: {
    marginBottom: 10
  },
  picker: {
    // height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    // backgroundColor: 'pink',
    borderRadius: 5,
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    textAlignVertical: 'top',
  },
  photoContainer: {
    marginBottom: 20,
  },
  photoButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  photoText: {
    color: '#fff',
  },
  imagePreview: {
    marginTop: 10,
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
})