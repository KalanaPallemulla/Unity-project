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

const Tests = ({navigation}) => {
  console.log(navigation);
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
        <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
          <View
            style={{
              borderColor: '#0a0a0a',
              borderWidth: 0.5,
              width: '40%',
              padding: 12,
            }}>
            <Text style={{textAlign: 'center', fontSize: 16, color: '#0a0a0a'}}>
              TESTS
            </Text>
          </View>
        </View>
        <View
          style={{flex: 12, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: '#0a0a0a',
              padding: 16,
              borderStyle: 'dashed',
            }}>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#0a0a0a',
                padding: 2,
                width: '40%',
              }}>
              <Text style={{color: '#0a0a0a'}}>For Patient</Text>
            </View>
            <View>
              <View style={{marginTop: 30}} />
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate('Web', {
                    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfJkjzAkHAlL9f6YpvZDQhvDQDquuJM0rW0HzEjz38wucuGXg/viewform',
                  })
                }>
                <View
                  style={{
                    backgroundColor: 'purple',
                    shadowColor: 'gray',
                    shadowOpacity: 100,
                    borderRadius: 20,
                    width: 250,
                    height: 40,
                  }}>
                  <Text
                    style={{
                      marginTop: '3%',
                      fontSize: 20,
                      textAlign: 'center',
                      alignContent: 'center',
                      color: '#fff',
                    }}>
                    MMSE
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              <View style={{marginTop: 8}} />

              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate('Web', {
                    url: 'https://docs.google.com/forms/d/e/1FAIpQLSduhw0nrPi3BZ-8sJmpp5FnivvDSPa5zDMyunaFmb1LsyIzPw/viewform',
                  })
                }>
                <View
                  style={{
                    backgroundColor: 'purple',
                    shadowColor: 'gray',
                    shadowOpacity: 100,
                    borderRadius: 20,
                    width: 250,
                    height: 40,
                  }}>
                  <Text
                    style={{
                      marginTop: '3%',
                      fontSize: 20,
                      textAlign: 'center',
                      alignContent: 'center',
                      color: '#fff',
                    }}>
                    MoCA
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={{marginTop: 30}} />
          <View
            style={{
              borderWidth: 0.5,
              borderColor: '#0a0a0a',
              padding: 16,
              borderStyle: 'dashed',
            }}>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#0a0a0a',
                padding: 2,
                width: '40%',
              }}>
              <Text style={{color: '#0a0a0a'}}>For Caretaker</Text>
            </View>
            <View>
              <View style={{marginTop: 30}} />
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate('Web', {
                    url: 'https://docs.google.com/forms/d/1BsQ1Ce4VeINFjDBy-UqJRV9WFx16ETY80wB0Pfw-nOM/edit?usp=drivesdk',
                  })
                }>
                <View
                  style={{
                    backgroundColor: 'purple',
                    shadowColor: 'gray',
                    shadowOpacity: 100,
                    borderRadius: 20,
                    width: 250,
                    height: 40,
                  }}>
                  <Text
                    style={{
                      marginTop: '3%',
                      fontSize: 20,
                      textAlign: 'center',
                      alignContent: 'center',
                      color: '#fff',
                    }}>
                    NPI
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              <View style={{marginTop: 8}} />

              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate('Web', {
                    url: 'https://docs.google.com/forms/d/e/1FAIpQLSdcBTuh3LupgHETYkgc4pseXQo60iAv04oWzVmugCanwyG7tg/viewform',
                  })
                }>
                <View
                  style={{
                    backgroundColor: 'purple',
                    shadowColor: 'gray',
                    shadowOpacity: 100,
                    borderRadius: 20,
                    width: 250,
                    height: 40,
                  }}>
                  <Text
                    style={{
                      marginTop: '3%',
                      fontSize: 20,
                      textAlign: 'center',
                      alignContent: 'center',
                      color: '#fff',
                    }}>
                    DAD
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
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

export default Tests;
