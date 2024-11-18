import React from 'react';
import {Button, Text} from 'react-native';
import ScreenEnums from './ScreenEnums';

const LoginScreen = props => {
  return (
    <>
      <Text>Login</Text>
      <Button
        title={'Test'}
        onPress={() => {
          props.navigation.navigate(ScreenEnums.About);
        }}
      />
    </>
  );
};

export default LoginScreen;
