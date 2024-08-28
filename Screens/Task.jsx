import React, { useState } from 'react';
import { View, Text, Button , Alert, StyleSheet, ScrollView, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Clipboard from 'expo-clipboard';

const NotifAlram = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false)

  const copyToClipboard = async (text) => {
    try {
      await Clipboard.setStringAsync(text);
      Alert.alert('Copied to Clipboard', `The text "${text}" has been copied to your clipboard.`);
    } catch (error) {
      Alert.alert('Error', `Failed to copy text: ${error.message}`);
    }
  };

  return (
      <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('TaskModal')}>
            <Text 
              style={{display: 'flex', marginTop: 10, alignSelf: 'flex-end', color: 'blue'}}
            >
              + add Task
            </Text>
          </TouchableOpacity>
          <ScrollView>
          <View style={styles.card}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
              >
                <View style={styles.rowFlex}>
                  <Text style={styles.headerText}>Agreement</Text>
                  <Text style={styles.headerTextUser}>@userName</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                  <Button
                    title="Report"
                  />
                </TouchableOpacity>
            </View>
          </View>
                <Modal
                  transparent={true}
                  animationType="slide"
                  visible={modalVisible}
                  onRequestClose={() => setModalVisible(false)}
                >
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                    <View style={styles.card}>
                        <View style={styles.header}>
                            <View style={styles.rowFlex}>
                              <Text style={styles.headerText}>Agreement</Text>
                              <Text style={styles.headerTextUser}>@userName</Text>
                            </View>
                        </View>
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text>Job Title: my job</Text>
                        <Text style={{color: '#33daff', marginBottom: 5, marginTop: 5}}>Job Description</Text>
                        <Text>
                          To reduce the size of the Picker without causing the Picker.
                          Item elements to remain misaligned or hidden, you need to make sure the Picker.
                          Item elements adjust properly within the reduced height. 
                          Here's an updated approach that ensures everything fits correctly
                        </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                          <View style={{flexDirection: 'column'}}>
                            <Text style={{color: '#33daff'}}>Amount</Text>
                            <Text>200K FRW</Text>
                          </View>
                          <View style={{flexDirection: 'column'}}>
                            <Text style={{color: '#33daff'}}>Duration</Text>
                            <Text>3 months</Text>
                          </View>
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                          <View style={{flexDirection: 'column'}}>
                            <Text style={{color: '#33daff'}}>Start Date</Text>
                            <Text>1 July 2024</Text>
                          </View>
                          <View style={{flexDirection: 'column'}}>
                            <Text style={{color: '#33daff'}}>End Date</Text>
                            <Text>1 August 2024</Text>
                          </View>
                        </View>
                        <Text style={{marginTop: 10, color: '#33daff'}}>Our Contact</Text>
                        <View style={{marginTop: 5, gap: 4, marginBottom: 20}}>
                          <TouchableOpacity onPress={() => copyToClipboard("0787462384")}>
                            <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>0787462384</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => copyToClipboard("example@gmail.com")}>
                            <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>example@gmail.com</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text>Close</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
          </ScrollView>
      </View>
  );
};

export default NotifAlram;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    //paddingTop: 1,
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
    //borderBottomWidth: 1,
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
});



