/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  Button,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  TouchableWithoutFeedback,
  BackHandler,
  Alert,
} from 'react-native';
import bg_image from '../assets/bg_image.jpeg';

const Home = ({navigation}) => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const handleBackButton = () => {
    Alert.alert(
      'Exit App',
      'Exiting the application?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      },
    );
    return true;
  };

  return (
    <ImageBackground source={bg_image} style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        {/* <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <TouchableWithoutFeedback
            style={{
              width: '100%',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: 'red',
                width: '50%',
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center'}}>Registration Number</Text>
            </View>
          </TouchableWithoutFeedback>
          <Button
            onPress={() => navigation.navigate('Entering')}
            title="Registration Number"
          />
        </View> */}
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Entering')}>
              <View
                style={{
                  backgroundColor: 'blue',
                  paddingVertical: 20,
                  paddingHorizontal: 8,
                  shadowColor: 'gray',
                  shadowOpacity: 100,
                  borderRadius: 20,
                }}>
                <Text style={{fontSize: 16, color: 'white'}}>
                  Registration Number
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <View style={{marginTop: 10}} />
            <TouchableWithoutFeedback onPress={handleBackButton}>
              <View
                style={{
                  backgroundColor: 'blue',
                  paddingVertical: 20,
                  paddingHorizontal: 8,
                  shadowColor: 'gray',
                  shadowOpacity: 100,
                  borderRadius: 20,
                }}>
                <Text
                  style={{fontSize: 16, color: 'white', textAlign: 'center'}}>
                  Exit
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 70,
            // backgroundColor: 'gray',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
          }}>
          <Text
            style={{
              padding: 8,
              maxWidth: '100%',
              textAlign: 'center',
              fontSize: 12,
              color: '#000',
            }}>
            A Final Year Project By Undergraduates of
          </Text>
          <Text
            style={{
              padding: 0,
              maxWidth: '100%',
              textAlign: 'center',
              fontSize: 12,
              color: '#000',
            }}>
            General Sir John Kothalawala Defence University - Sri Lanka
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
