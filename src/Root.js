import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {DarkTheme, LightTheme} from './Theme/colors';
import RootNavigation from './RootNavigation';

const Root = props => {
  const colorScheme = useColorScheme();

  const paperTheme = colorScheme === 'dark' ? {...DarkTheme} : {...LightTheme};

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <PaperProvider theme={paperTheme}>
        <RootNavigation />
      </PaperProvider>
    </SafeAreaView>
  );
};

export default Root;
