import React from 'react';
import { View, Image, Modal, Text, Button , StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { Button } from 'react-native-paper';

const Home = ({ navigation }) => {

  const [modalVisible, setModalVisible] = React.useState(false);

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

      <View style={styles.BusinessCard}>
        <View style={styles.BusinessCardHeader}>
          <Text style={styles.BusinessHeaderLabel}>New</Text>
          <Text style={styles.BusinessHeaderTitle}>Acme camera</Text>
        </View>
        <Image
          source={{ uri: 'https://nextui.org/images/card-example-6.jpeg' }}
          style={styles.BusinessCardImage}
          resizeMode="cover"
        />
        <View style={styles.BusinessCardFooter}>
          <View style={styles.BusinessFooterTextContainer}>
            <Text style={styles.BusinessFooterText}>Available for sale</Text>
            <Text style={styles.BusinessFooterText}>1 piece for 100K</Text>
          </View>
          <TouchableOpacity
            style={styles.BusinessOrderButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.BusinessButtonText}>Order Now</Text>
          </TouchableOpacity>
        </View>

        {/* Modal for Order Now button */}
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.BusinessModalContainer}>
            <View style={styles.BusinessModalContent}>
              <Text>Modal Content Here</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      </ScrollView>
    </View>
  );
};

export default Home;
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
    width: '100%',
    // maxWidth: 350, // Limits the maximum width of the card
    
    marginBottom: 10,
    // // marginTop: 10,
    // position: 'relative',
    // borderRadius: 10,
    // overflow: 'hidden',
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


  BusinessCard: {
    width: '100%',
    maxWidth: 350, // Limits the maximum width of the card
    height: 300,
    marginBottom: 10,
    // marginTop: 10,
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden', // Ensures the content stays within the card border
  },
  BusinessCardHeader: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  BusinessHeaderLabel: {
    color: 'rgba(255, 255, 255, 0.6)',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  BusinessHeaderTitle: {
    color: 'black',
    fontWeight: '500',
    fontSize: 24,
  },
  BusinessCardImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    transform: [{ scale: 1.25 }, { translateY: -24 }],
  },
  BusinessCardFooter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(168, 168, 168, 0.5)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    zIndex: 10,
  },
  BusinessFooterTextContainer: {
    width: '75%',
  },
  BusinessFooterText: {
    color: 'black',
    fontSize: 12,
  },
  BusinessOrderButton: {
    backgroundColor: '#f8f8f8',
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 0,
    borderColor: 'transparent',
  },
  BusinessButtonText: {
    color: '#007bff',
    fontSize: 12,
  },
  BusinessModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  BusinessModalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
