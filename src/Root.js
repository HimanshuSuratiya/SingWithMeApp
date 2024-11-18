import React from 'react';
import {ActivityIndicator, useColorScheme} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {DarkTheme, LightTheme} from './Theme/colors';

const Root = props => {
  const colorScheme = useColorScheme();

  const paperTheme = colorScheme === 'dark' ? {...DarkTheme} : {...LightTheme};

  return (
    <PaperProvider theme={paperTheme}>
      <ActivityIndicator animating={true} />
    </PaperProvider>
  );
};

export default Root;
