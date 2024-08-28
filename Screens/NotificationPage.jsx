import React from 'react'
import { View, Image, Modal, Text, Button , StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NotificationPage = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
    <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.rowFlex}>
            <Text style={styles.headerText}>Full name</Text>
            <Text style={styles.headerTextUser}>@userName</Text>
          </View>
          <Text style={styles.headerText}>Job title</Text>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <Text style={styles.bodyText}>Description will go here under the body section </Text>
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerItem}>
            <Text style={styles.footerText}>Price</Text>
            <Text style={styles.footerText}>FRW 2000</Text>
          </View>
          <View style={styles.footerItem}>
            <Text style={styles.footerText}>Duration</Text>
            <Text style={styles.footerText}>& Days</Text>
          </View>
          <View style={styles.footerItem}>
            <TouchableOpacity>
              <Button
                title="Apply"
              />
            </TouchableOpacity>
          </View>
        </View>
    </View>
    </ScrollView>
    </View>
  )
}

export default NotificationPage


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 12,
      // paddingTop: 1,
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
    body: {
      padding: 10,
    },
    footer: {
      padding: 10,
      // borderTopWidth: 1,
      borderTopColor: '#ddd',
      flexDirection: 'row',
      justifyContent: 'space-between',
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
    bodyText: {
      fontSize: 16,
      color: '#4a5568'
    },
    footerText: {
      fontSize: 14,
      color: '#888',
      color: '#4a5568'
    },
    footerItem: {
      flex: 1,
      alignItems: 'flex-start',
      color: '#4a5568'
    },
  });