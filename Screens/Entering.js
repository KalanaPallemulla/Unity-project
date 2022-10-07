/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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

const Entering = ({navigation}) => {
  const [value, setValue] = useState('');
  const handleSubmit = () => {
    if (value) {
      navigation.navigate('Content');
    }
  };
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
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <View
            style={{
              justifyContent: 'center',
              width: '100%',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 70,
                backgroundColor: 'gray',
                justifyContent: 'center',
                borderRadius: 12,
              }}>
              <Text
                style={{
                  padding: 8,
                  maxWidth: 300,
                  textAlign: 'center',
                  fontSize: 16,
                }}>
                Please insert your Registration Number correctly and press Enter
              </Text>
            </View>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setValue(text)}
            // value={number}
            placeholder="useless placeholder"
            keyboardType="default"
          />
          {/* <Button
            onPress={() => navigation.navigate('Content')}
            title="Enter"
          /> */}
          <View style={{alignItems: 'center'}}>
            <TouchableWithoutFeedback onPress={handleSubmit}>
              <View
                style={{
                  backgroundColor: 'blue',
                  paddingVertical: 20,
                  paddingHorizontal: 8,
                  shadowColor: 'gray',
                  shadowOpacity: 100,
                  borderRadius: 20,
                  width: '20%',
                }}>
                <Text
                  style={{fontSize: 16, color: 'white', textAlign: 'center'}}>
                  Enter
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

const styles = StyleSheet.create({
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'gray',
    padding: 10,
    color: 'black',
    backgroundColor: 'white',
  },
});

export default Entering;
