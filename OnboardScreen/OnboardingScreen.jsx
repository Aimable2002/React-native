import React, { Component } from 'react'
import { Image, StyleSheet, Text, View, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Swiper from 'react-native-swiper'

const OnboardingScreen = ({navigation}) => {
  return (
    <Swiper style={styles.wrapper}>
        <View style={styles.slide1}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 15}}>Find Remote Opportunities</Text>
          <Image 
            source={require('../assets/business.png')}
            style={{height: 300, width: 300}}
          />
          <View style={{paddingHorizontal: 15}}>
            <Text style={{fontSize: 15, marginTop: 15}}>
                Discover remote job opportunities that match your skills and interests. 
                Enjoy flexibility and work from anywhere with our extensive job listings.
            </Text>
          </View>
        </View>
        <View style={styles.slide2}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 15}}>Empower Your Business</Text>
        <Image 
            source={require('../assets/market.png')}
            style={{height: 300, width: 300}}
          />
          <View style={{paddingHorizontal: 15}}>
            <Text style={{fontSize: 15}}>
                Expand your business with tools and resources tailored for growth. 
                From marketing to financial management, we support your business success
            </Text>
          </View>
        </View>
        <View style={styles.slide3}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 15}}>Secure Your Agreements</Text>
        <Image 
            source={require('../assets/secure.avif')}
            style={{height: 300, width: 300}}
          />
          <View style={{paddingHorizontal: 15}}>
            <Text style={{fontSize: 15, marginTop: 15}}>
                Rest assured with our advanced security measures. 
                We protect your financial data with encryption and fraud prevention for safe transactions
            </Text>
          </View>
        </View>
        <View style={styles.slide4}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 15}}>Welcome to Familly</Text>
        <Image 
            source={require('../assets/OIP.png')}
            style={{height: 300, width: 300}}
          />
          <View style={{paddingHorizontal: 15, marginTop: 15}}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
            >
                <Button 
                    title='Get Started'
                />
            </TouchableOpacity>
          </View>
        </View>
      </Swiper>
  )
}

export default OnboardingScreen


const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
        ///marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    slide4: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })
