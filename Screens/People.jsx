import React, {useState} from 'react';
import { View, Text, Button , StyleSheet, ScrollView, Modal, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AccountInfo from '../Prop/AccountInfo';

const People = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.card}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
          >
            <View style={styles.rowFlex}>
              <Text style={styles.headerText}>Full name</Text>
              <Text style={styles.headerTextUser}>@userName</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('InviteModal')}
          >
              <Button
                title="Invite"
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
                        {/* <Text>Career: my job</Text> */}
                        <View style={styles.card}>
                          <View style={styles.header}>
                            <View style={styles.rowFlex}>
                              <Text style={styles.headerText}>Job Description</Text>
                              <Text style={{marginTop: 10}}>
                                To reduce the size of the Picker without causing the Picker.
                                Item elements to remain misaligned or hidden, you need to make sure the Picker.
                                Item elements adjust properly within the reduced height. 
                                Here's an updated approach that ensures everything fits correctly
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.card}>
                          <View style={styles.header}>
                            <View style={styles.rowFlex}>
                              <View style={{flexDirection: 'row', gap: 20, justifyContent: 'space-between', marginTop: 10}}>
                                <View style={{flexDirection: 'column'}}>
                                  <Text style={styles.headerTextUser}>Amount</Text>
                                  <Text>200K FRW</Text>
                                </View>
                                <View style={{flexDirection: 'column', alignItems: 'flex-end', alignSelf: 'flex-end'}}>
                                  <Text style={styles.headerTextUser}>Duration</Text>
                                  <Text>3 months</Text>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>

                        <View style={styles.card}>
                          <View style={styles.header}>
                            <View style={styles.rowFlex}>
                              <Text style={styles.headerText}>Our Contact</Text>
                              <View style={{marginTop: 5, gap: 4, marginBottom: 20}}>
                                <TouchableOpacity onPress={() => copyToClipboard("0787462384")}>
                                  <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>0787462384</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => copyToClipboard("example@gmail.com")}>
                                  <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>example@gmail.com</Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>
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

export default People;
//#f5f5f5
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    // paddingTop: 1,
    backgroundColor: 'white',
  },
  card: {
    // marginHorizontal: 1,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 10,
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
});
