import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Clipboard from 'expo-clipboard'
import Swiper from 'react-native-swiper'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from '../Screens/Home';
import Task from '../Screens/Approve';
import NotifAlram from '../Screens/Task';
import TabNavigator from './TabNavigator';
import People from '../Screens/People';
import Dashboard from '../Screens/Dashboard';
import Account from '../Screens/Account';
import DeleteAccount from '../Screens/DeleteAccount';
import TaskModal from '../Modals/TaskModal';
import InviteModal from '../Modals/inviteModal';

import NotificationPage from '../Screens/NotificationPage';
import Sign from '../Screens/sign';

import SplashScreen from '../Screens/SplashScreen';
import LoadingScreen from '../Screens/LoadingScreen';
import OnboardingScreen from '../OnboardScreen/OnboardingScreen';
import Login from '../Screens/Login';

// Create the Stack Navigator
const Stack = createStackNavigator();

// Create the Drawer Navigator
const Drawer = createDrawerNavigator();

// Define the Custom Drawer Content
const CustomDrawerContent = (props) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const copyToClipboard = async () => {
    try {
      // Copy number to clipboard
      const number = '+250787462384'
      await Clipboard.setStringAsync(number.toString());

      // Show a confirmation alert
      Alert.alert('Copied to Clipboard', `The number ${number} has been copied.`);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Dashboard"
        onPress={() => props.navigation.navigate('Dashboard')}
        icon={() => <Icon name="grid-outline" size={20} />}
      />
      <DrawerItem
        label="Account"
        onPress={() => props.navigation.navigate('Account')}
        icon={() => <Icon name="person-outline" size={20} />}
      />
      <DrawerItem
        label="Theme"
        onPress={() => props.navigation.navigate('Theme')}
        icon={() => <Icon name="color-palette-outline" size={20} />}
      />
      <DrawerItem
        label="Contact Us"
        icon={() => <Icon name="mail-outline" size={20} />}
        onPress={() => setDropdownOpen(!dropdownOpen)}
      />
      {dropdownOpen && (
          <View style={styles.dropdownMenu}>
            <TouchableOpacity onPress={copyToClipboard} style={styles.dropdownItem}>
              <Text>Contact Support: 078 746 2384</Text>
            </TouchableOpacity>
          </View>
        )}
      <DrawerItem
        label="FAQs"
        onPress={() => props.navigation.navigate('FAQs')}
        icon={() => <Icon name="help-circle-outline" size={20} />}
      />
      <DrawerItem
        label="Terms"
        onPress={() => props.navigation.navigate('Terms')}
        icon={() => <Icon name="document-text-outline" size={20} />}
      />
      <DrawerItem
        label="Logout"
        onPress={() => props.navigation.navigate('Logout')}
        icon={() => <Icon name="log-out-outline" size={20} />}
      />
      <DrawerItem
        label="Delete Account"
        onPress={() => props.navigation.navigate('Delete Account')}
        icon={() => <Icon name="trash-outline" size={20} />}
      />
    </DrawerContentScrollView>
  );
};


// const OnboardingScreen = () => (
//   <Swiper showsPagination={true} paginationStyle={{ bottom: 20 }} loop={false}>
//     <Onboarding1 />
//     <Onboarding2 />
//   </Swiper>
// );


// Create the Main Stack Navigator
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="SplashScreen" 
        component={SplashScreen} 
          options={{headerShown: false}}
        />
      <Stack.Screen 
        name="LoadingScreen" 
        component={LoadingScreen} 
          options={{headerShown: false}}
        />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="sign" component={Sign} />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={({ navigation }) => ({
          headerTitle: '',
          headerLeft: () => (
            <Text style={{ marginLeft: 15, fontSize: 18 }}>Web Application</Text>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 15 }}>
              <TouchableOpacity onPress={() => navigation.navigate('NotificationPage')}>
                <Icon name="notifications-outline" size={25} style={{ marginRight: 15 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Icon name="menu-outline" size={25} />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen name="TaskDetail" component={Task} />
      <Stack.Screen name="NotificationPage" component={NotificationPage} />
      <Stack.Screen name="PeopleScreen" component={People} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="TaskModal" component={TaskModal} options={{ title: 'Add Job Or Bussiness' }}/>
      <Stack.Screen name="InviteModal" component={InviteModal} options={{ title: 'Invitation' }}/>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Delete Account" component={DeleteAccount} />
    </Stack.Navigator>
  );
};

// Create the App Navigator with Drawer nested within Stack
const AppNavigator = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerPosition="right"
        drawerType="back"
        overlayColor="transparent"
        drawerStyle={styles.drawer}
        sceneContainerStyle={styles.sceneContainer}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="MainStack" component={MainStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

// Define the styles
const styles = StyleSheet.create({
  drawer: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width * 0.5,
  },
  sceneContainer: {
    backgroundColor: 'transparent',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  drawerLabel: {
    flex: 1,
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContent: {
    position: 'absolute',
    right: 10,
    top: 100,
    width: '50%',
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  modalButton: {
    paddingVertical: 10,
  },
  dropdownContainer: {
    paddingHorizontal: 15,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  dropdownButtonText: {
    fontSize: 16,
    flex: 1,
  },
  dropdownMenu: {
    paddingLeft: 15,
    paddingVertical: 5,
  },
  dropdownItem: {
    paddingVertical: 10,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  drawerLabel: {
    fontSize: 16,
  },
});

export default AppNavigator;
