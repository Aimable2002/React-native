import React from 'react';
import { View, Text, Button , StyleSheet, ScrollView } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
// import { Button } from 'react-native-paper';

const Account = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.rowFlex}>
            <Text style={styles.headerText}>Full name</Text>
            <Text style={styles.headerTextUser}>@userName</Text>
          </View>
        </View>
        <View>
            <Text style={styles.headerTextUser}>Title: your Title</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.rowFlex}>
            <Text style={styles.headerText}>Change Password</Text>
            <View style={{marginTop: 5, gap: 10}}>
                <TextInput placeholder="Type Old password...."/>
                <TextInput placeholder="Type New password...."/>
            </View>
          </View>
        </View>
        <View>
            <TouchableOpacity>
                <Button
                    title="Save Password"
                    onPress={() => navigation.navigate('Main')}
                />
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.rowFlex}>
            <Text style={styles.headerText}>Address</Text>
            <View style={{marginTop: 5, gap: 10}}>
                <Text>Email: example@gmail.com</Text>
                <Text>Phone number: 0787462384</Text>
                <Text>Country: Rwanda</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.rowFlex}>
            <Text style={styles.headerText}>About Me</Text>
            <View style={{marginTop: 5, gap: 10}}>
                <Text>Your introduction to let people know you</Text>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default Account;
//#f5f5f5
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    // paddingTop: 1,
    backgroundColor: 'white',
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
  }
});
