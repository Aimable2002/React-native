import React, { useState } from 'react';
import { View, Text, Button , Modal,  StyleSheet, ScrollView} from 'react-native';
import { TextInput, TouchableOpacity} from 'react-native-gesture-handler';
// import { Modal,} from 'react-native-paper';

import DashboardTable from '../Prop/DashTables';
import SecondTable from '../Prop/SecondTable';

// import PhoneInput from 'react-native-phone-number-input';

const Dashboard = ({ navigation }) => {
  const [isBalance, setIsBalance] = useState(false)
  const toggleButton = () => {
    setIsBalance(!isBalance)
  }
  const [modalVisible1, setModalVisible1] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [inputValue, setInputValue] = React.useState({
    Amount: '',
    Phone_number: ''
  });
  const handleChange = (name, value) => {
    setInputValue(prevState => ({ ...prevState, [name]: value }));
  };
  return (
    <View style={styles.container}>
      <ScrollView>
            <View style={styles.card}>
                <View style={styles.header}>
                    <View style={styles.rowFlex}>
                        <View style={{flexDirection: 'row', gap: 10}}>
                          <Text style={styles.headerText} onPress={toggleButton}>{!isBalance ? 'Wallet' : 'Balance'}</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 10}}>
                            <View style={{flexDirection: 'column', alignItems: 'center', gap: 6}}>
                                <Text style={{color: '#4a5568'}}>Balance</Text>
                                <Text>1000 FRW</Text>
                            </View>
                            <View style={{flexDirection: 'column', alignItems: 'center', gap: 6}}>
                                <Text style={{color: '#4a5568'}}>Deposit</Text>
                                <Text>2000 FRW</Text>
                            </View>
                            <View style={{flexDirection: 'column', alignItems: 'center', gap: 6}}>
                                <Text style={{color: '#4a5568'}}>Withdrow</Text>
                                <Text>1000 FRW</Text>
                            </View>
                        </View>
                        <View style={{marginTop: 20}}>
                            <View style={{flexDirection: 'column', alignItems: 'center', gap: 6}}>
                                <Text style={{color: '#4a5568'}}>Earned Amount</Text>
                                <Text>1000 FRW</Text>
                            </View>
                        </View>
                    </View>
                    {/* <TouchableOpacity>
                        <Button
                            title="Invite"
                            onPress={() => navigation.navigate('Main')}
                        />
                    </TouchableOpacity> */}
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.header}>
                    <TouchableOpacity
                      onPress={() => setModalVisible1(true)}
                    >
                      <Button
                        title="Cash In"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setModalVisible(true)}
                    >
                        <Button
                            title="Cash Out"
                        />
                    </TouchableOpacity>
                </View>
                <Modal
                  transparent={true}
                  animationType='slide'
                  visible={modalVisible}
                  onRequestClose={() => setModalVisible(false)}
                >
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <TouchableOpacity 
                        onPress={() => setModalVisible(false)}
                      >
                        <Text style={{textAlign: 'right'}}>Close</Text>
                      </TouchableOpacity>
                      <Text style={{marginTop: 10, textAlign: 'center', marginBottom: 20}}>Cash Out </Text>
                      {['Amount', 'Phone_number'].map((field) => (
                          <TextInput 
                            key={field}
                            value={inputValue[field]}
                            onChangeText={(text) => handleChange(field, text)}
                            placeholder={field === 'Amount' ? 'Amount' : 'Phone_number'}
                            style={{borderColor: '#ccc', borderWidth: 1, gap: 10, marginBottom: 20, padding: 10, borderRadius: 6}}
                            placeholderTextColor="darkgray"
                            keyboardType={field === 'Amount' ? 'numeric' : field === 'Phone_number' ? 'numeric' : 'default'}
                          />
                      ))}
                      <View style={{marginTop: 10}}>
                        <TouchableOpacity>
                          <Button 
                            title='Cash Out '
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>

                      {/**Second modal cash In  */}
                <Modal
                  transparent={true}
                  animationType='slide'
                  visible={modalVisible1}
                  onRequestClose={() => setModalVisible1(false)}
                >
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <TouchableOpacity 
                        onPress={() => setModalVisible1(false)}
                      >
                        <Text style={{textAlign: 'right'}}>Close</Text>
                      </TouchableOpacity>
                      <Text style={{marginTop: 10, textAlign: 'center', marginBottom: 20}}>Cash In </Text>
                      {['Amount', 'Phone_number'].map((field) => (
                          <TextInput 
                            key={field}
                            value={inputValue[field]}
                            onChangeText={(text) => handleChange(field, text)}
                            placeholder={field === 'Amount' ? 'Amount' : 'Phone_number'}
                            style={{borderColor: '#ccc', borderWidth: 1, gap: 10, marginBottom: 20, padding: 10, borderRadius: 6}}
                            placeholderTextColor="darkgray"
                            keyboardType={field === 'Amount' ? 'numeric' : field === 'Phone_number' ? 'numeric' : 'default'}
                          />
                      ))}
                      <View style={{marginTop: 10}}>
                        <TouchableOpacity>
                          <Button 
                            title='Cash In '
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
            </View>
            {/* <View style={styles.card}>
                <View style={styles.header}>
                  <View style={styles.rowFlex}>
                        <View style={{flexDirection: 'row', gap: 10}}>
                          <Text style={styles.headerText} onPress={toggleButton}>Task I publish</Text>
                        </View>
                        <View style={styles.container}>
                          
                        </View>
                        
                    </View>
                </View>
            </View>  */}
            <View style={{flexDirection: 'row', gap: 10, marginTop: 10}}>
              <Text style={styles.headerText} onPress={toggleButton}>Task I publish</Text>
            </View>
            <DashboardTable />
            <View style={{flexDirection: 'row', gap: 10, marginTop: 20}}>
              <Text style={styles.headerText}>Task I am doing</Text>
            </View>
            <SecondTable />
            
      </ScrollView>
    </View>
  );
};

export default Dashboard ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: '#f5f5f5',
    
  },
  card: {
    marginHorizontal: 1,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    margin: 10,
  },
  header: {
    padding: 10,
    // borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowFlex: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerTextUser: {
    color: '#4a5568'
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
  row: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
  },
  phoneInputContainer: {
    backgroundColor: 'transparent',
  },
  textContainer: {
    backgroundColor: 'transparent',
  },
  textInput: {
    backgroundColor: 'transparent',
    // Add more styling as needed
  },
  codeText: {
    // Add styling for the country code text
  },
  flagButton: {
    // Add styling for the flag button
  },
});



