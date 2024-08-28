import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
import BusinessModal from './BusinessModal';

import DateTimePicker from '@react-native-community/datetimepicker';


const TaskModal = () => {

    const [inputValue, setInputValue] = useState({
        Start_date: new Date(),  // Initialize with current date
        End_date: new Date(),    // Initialize with current date
    });
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [image, setImage] = React.useState(null);

  const handleChange = (name, value) => {
    setInputValue(prevState => ({ ...prevState, [name]: value }));
  };


  const [isAddJob, setIsAddJob] = useState(true)
  const [isBusiness, setIsBusiness] = useState(false)

  const [activeButton, setActiveButton] = useState('Job')

  const handleClickBtn = (e) => {
    setIsAddJob(false)
    setIsBusiness(false)
    setActiveButton(e)

    switch (e) {
        case 'Job' :
            setIsAddJob(true)
        break;
        case 'Business' :
            setIsBusiness(true)
        break
    }
  }

  const handleDateChange = (name, event, selectedDate) => {
    if (selectedDate) {
        handleChange(name, selectedDate);
    }
};

  return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // Adjust this value based on your header height if needed
            >
                <ScrollView>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
                        <TouchableOpacity>
                        <Button
                            title="Add Task"
                            onPress={() => handleClickBtn('Job')}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Button
                            title="Add Business"
                            onPress={() => handleClickBtn('Business')}
                        />
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent: 'center', marginTop: 20}}>
                        <Text style={{textAlign: 'center'}}>{isAddJob ? 'Form to add Task' : 'Form to add Business'}</Text>
                        {isAddJob && (
                            <View style={{flexDirection: 'column', marginTop: 10}}>
                                {['Job_Category', 'Description', 'Specification', 'Amount', 'Start_date', 'End_date'].map((field) => (
                                    field === 'Job_Category' ? (
                                        <View key={field} style={styles.inputContainer}>
                                            <Picker
                                                selectedValue={selectedCategory}
                                                onValueChange={(itemValue) => {
                                                    setSelectedCategory(itemValue);
                                                    handleChange(field, itemValue);
                                                }}
                                            style={styles.picker}
                                            >
                                                <Picker.Item label="Select Job Category" value="" />
                                                <Picker.Item label="Art" value="Art" />
                                                <Picker.Item label="IT Field" value="IT Field" />
                                                <Picker.Item label="Delivery" value="Delivery" />
                                                <Picker.Item label="Producer" value="Producer" />
                                                <Picker.Item label="Agri-business" value="Agri_business" />
                                                <Picker.Item label="Services" value="Services" />
                                                <Picker.Item label="Others" value="Others" />
                                            </Picker>
                                        </View>
                                    ) : field === 'Description' || field === 'Specification' ? (
                                        <TextInput
                                            key={field}
                                            value={inputValue[field]}
                                            onChangeText={(text) => handleChange(field, text)}
                                            placeholder={field === 'Description' ? 'Description' : 'Specification'}
                                            multiline
                                            numberOfLines={4}
                                            style={styles.textarea}
                                        />
                                    ) : field === 'Start_date' || field === 'End_date' ? (
                                                <TouchableOpacity key={field} onPress={() => setShowDatePicker(prevState => ({ ...prevState, [field]: true }))}>
                                                    <TextInput
                                                        value={inputValue[field] ? inputValue[field].toISOString().split('T')[0] : ''}
                                                        placeholder={field.replace('_', ' ')}
                                                        style={styles.input}
                                                        editable={false}
                                                    />
                                                    <DateTimePicker
                                                        value={inputValue[field]}
                                                        mode="date"
                                                        display="default"
                                                        onChange={(event, selectedDate) => handleDateChange(field, event, selectedDate)}
                                                    />
                                                </TouchableOpacity> 
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
                        )}
                        {isBusiness && (<BusinessModal />)}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        backgroundColor: '#f5f5f5',
    },
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
});

export default TaskModal;
