import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomButton from '../Component/CustomButton';
import RegisterLoginWithSocialMedia from '../Component/RegisterLoginWithSocialMedia';
import DividerWithText from '../Component/DividerWithText';
import HeadingLarge from '../Component/TextsComp/HeadingLarge';
import {useTheme} from 'react-native-paper';

const LoginScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <>
      <View style={styles.container}>
        <HeadingLarge
          receiveStyles={{
            color: colors.black,
            textAlign: 'left',
            marginBottom: 8,
          }}
          title={'Welcome back! Glad to see you, Again!'}
        />
        <CustomButton filled={true} title="Login" />
        <DividerWithText title={'Or Login with'} />
        <RegisterLoginWithSocialMedia />
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
