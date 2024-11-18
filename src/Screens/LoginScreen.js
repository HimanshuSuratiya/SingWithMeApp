import React from 'react';
import {Text} from 'react-native';
import ScreenEnums from './ScreenEnums';
import MIcon from 'react-native-vector-icons/AntDesign';
import {Button} from 'react-native-paper';

const LoginScreen = props => {
  return (
    <>
      <Text>Login</Text>
      <MIcon name={'plus'} size={22} color={'red'} />
      <Button icon="access-point-plus">Press me</Button>
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
