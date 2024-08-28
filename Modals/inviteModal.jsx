import React, {useState} from 'react'

import {TextInput, View, Button, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Modal } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';


const InviteModal = () => {
    const [inputValue, setInputValue] = useState({
        Start_date: new Date(),  // Initialize with current date
        End_date: new Date(),    // Initialize with current date
    });

    const [showDatePicker, setShowDatePicker] = useState({ Start_date: false, End_date: false });

    const handleChange = (name, value) => {
        setInputValue(prevState => ({ ...prevState, [name]: value }));
      };
      const handleDateChange = (name, event, selectedDate) => {
        if (selectedDate) {
            handleChange(name, selectedDate);
        }
    };
  return (
    <View style={{paddingHorizontal: 20, marginTop: 10}}>
    <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
    >
        <ScrollView>
            <View style={{flexDirection: 'column', marginTop: 10}}>
                {['Task Title', 'Description', 'Specification', 'Amount', 'Start_date', 'End_date'].map((field) => (
                    field === 'Description' || field === 'Specification' ? (
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
                    <TouchableOpacity>
                        <Button 
                            title='Submit'
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
    </View>
  )
}

export default InviteModal


const styles = StyleSheet.create({
    textarea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    textAlignVertical: 'top',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
})

