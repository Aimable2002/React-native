import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import useLogin from '../Hooks/Registration/Login';
import { ScrollView } from 'react-native-gesture-handler';

const Login = ({navigation}) => {
  const { loading, login } = useLogin();

  const [inputValue, setInputValue] = useState({
    First_name: '',
    Last_name: '',
    userName: '',
    Carrer: '',
    Email: '',
    Password: '',
    Confirm_password: '',  // Corrected the field name
    Phone_number: ''
  });

  const handleChange = (field, text) => {
    setInputValue(prevState => ({
      ...prevState,
      [field]: text
    }));
  };

  const handleLoginSubmit = async () => {
    const { userName, Password } = inputValue;
    console.log('inputs :', inputValue);
    await login({ userName, Password });
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 74 : 0}
      >
        <ScrollView>
          <Text style={{marginTop: 20, marginBottom: 20, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Login Konect</Text>
          {['userName', 'Password'].map((field) => {
            return (
              <TextInput
                key={field}
                value={inputValue[field]}
                onChangeText={(text) => handleChange(field, text)}
                placeholder={field.replace('_', ' ')}
                secureTextEntry={field === 'Password'}
                keyboardType={field === 'Phone_number' ? 'numeric' : 'default'}
                style={styles.input}
              />
            );
          })}
          <TouchableOpacity onPress={() => navigation.navigate('TabNavigator')} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <View style={{marginTop: 40, flexDirection: 'row', gap: 5}}>
            <Text>No account ?</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('sign')}
            >
                <Text style={{color: '#33daff'}}>Create account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});

export default Login;
