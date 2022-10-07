import React from 'react';
import {SafeAreaView, Text, TouchableWithoutFeedback, View} from 'react-native';
import {WebView} from 'react-native-webview';

const WebViewScreen = ({route, navigation}) => {
  console.log(route);
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View
          style={{
            marginLeft: 0,
            width: 60,
            height: 40,
            backgroundColor: 'orange',
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <Text style={{textAlign: 'center', color: 'white'}}>Back</Text>
        </View>
      </TouchableWithoutFeedback>
      <WebView source={{uri: route.params.url}} />
    </SafeAreaView>
  );
};

export default WebViewScreen;
