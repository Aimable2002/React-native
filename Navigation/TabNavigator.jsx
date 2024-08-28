import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../Screens/Home';
import Task from '../Screens/Approve';
import NotifAlram from '../Screens/Task';
import People from '../Screens/People';
import Business from '../Screens/Business';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'People') {
            iconName = 'people-outline';
          } else if (route.name === 'Task') {
            iconName = 'add-circle-outline';
          } else if (route.name === 'Approve') {
            iconName = 'checkbox-outline';
          } else if (route.name === 'Business'){
            iconName = 'briefcase-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      })}
    //   tabBarOptions={{
        
    //   }}
    >
      <Tab.Screen name="Home" options={{ headerShown: false }} component={Home} />
      <Tab.Screen name="People" options={{ headerShown: false }} component={People} />
      <Tab.Screen name="Task" options={{ headerShown: false }} component={NotifAlram} />
      <Tab.Screen name="Business" options={{ headerShown: false }} component={Business} />
      <Tab.Screen name="Approve" options={{ headerShown: false }} component={Task} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
