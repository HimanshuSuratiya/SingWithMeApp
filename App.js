import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Root from './src/root';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <Root />
    </SafeAreaView>
  );
};

export default App;
