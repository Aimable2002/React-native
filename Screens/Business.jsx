import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';

// Custom component for Card with footer and header
const Business = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.headerLabel}>New</Text>
          <Text style={styles.headerTitle}>Acme camera</Text>
        </View>
        <Image
          source={{ uri: 'https://nextui.org/images/card-example-6.jpeg' }}
          style={styles.cardImage}
          resizeMode="cover"
        />
        <View style={styles.cardFooter}>
          <View style={styles.footerTextContainer}>
            <Text style={styles.footerText}>Available for sale</Text>
            <Text style={styles.footerText}>1 piece for 100K</Text>
          </View>
          <TouchableOpacity
            style={styles.orderButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.buttonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Modal Content Here</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};
//#f5f5f5
// Styles for the card component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: 'white',
  },
  card: {
    width: '100%',
    maxWidth: 350, // Limits the maximum width of the card
    height: 300,
    marginBottom: 10,
    marginTop: 10,
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden', // Ensures the content stays within the card border
  },
  cardHeader: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  headerLabel: {
    color: 'rgba(255, 255, 255, 0.6)',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  headerTitle: {
    color: 'black',
    fontWeight: '500',
    fontSize: 24,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    transform: [{ scale: 1.25 }, { translateY: -24 }],
  },
  cardFooter: {
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
  footerTextContainer: {
    width: '75%',
  },
  footerText: {
    color: 'black',
    fontSize: 12,
  },
  orderButton: {
    backgroundColor: '#f8f8f8',
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 0,
    borderColor: 'transparent',
  },
  buttonText: {
    color: '#007bff',
    fontSize: 12,
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

export default Business;
