/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Button,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import bg_image from '../assets/bg_image.jpeg';

const Content = ({navigation}) => {
  return (
    <ImageBackground source={bg_image} style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View
            style={{
              marginLeft: 20,
              width: 60,
              height: 40,
              backgroundColor: 'orange',
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <Text style={{textAlign: 'center', color: 'white'}}>Back</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Games')}>
            <View
              style={{
                backgroundColor: 'blue',
                shadowColor: 'gray',
                shadowOpacity: 100,
                borderRadius: 20,
                width: '50%',
                height: 120,
              }}>
              <Text
                style={{
                  marginTop: '20%',
                  fontSize: 30,
                  textAlign: 'center',
                  alignContent: 'center',
                }}>
                Games
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={{marginTop: 30}} />
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Virtual')}>
            <View
              style={{
                backgroundColor: 'green',
                shadowColor: 'gray',
                shadowOpacity: 100,
                borderRadius: 20,
                width: '50%',
                height: 120,
              }}>
              <Text
                style={{
                  marginTop: '12%',
                  fontSize: 30,
                  textAlign: 'center',
                  alignContent: 'center',
                }}>
                Virtual Environment
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={{marginTop: 30}} />

          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate('Tests', {
                itemId: 86,
                otherParam: 'https://www.google.com',
              })
            }>
            <View
              style={{
                backgroundColor: 'purple',
                shadowColor: 'gray',
                shadowOpacity: 100,
                borderRadius: 20,
                width: '50%',
                height: 120,
              }}>
              <Text
                style={{
                  marginTop: '20%',
                  fontSize: 30,
                  textAlign: 'center',
                  alignContent: 'center',
                }}>
                Tests
              </Text>
            </View>
          </TouchableWithoutFeedback>
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

const styles = StyleSheet.create({
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'gray',
    padding: 10,
    color: 'white',
    backgroundColor: 'white',
  },
});

export default Content;
