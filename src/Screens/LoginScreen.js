import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import CustomButton from '../Component/CustomButton';
import RegisterLoginWithSocialMedia from '../Component/RegisterLoginWithSocialMedia';
import DividerWithText from '../Component/DividerWithText';
import HeadingLarge from '../Component/TextsComp/HeadingLarge';
import {useTheme} from 'react-native-paper';
import CustomTextInput from '../Component/CustomTextInput';
import TextPasswordInput from '../Component/TextPasswordInput';
import SmallBold from '../Component/TextsComp/SmallBold';
import SmallNormal from '../Component/TextsComp/SmallNormal';
import ScreenEnums from './ScreenEnums';

const LoginScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <>
      <View style={styles.container}>
        <View>
          <HeadingLarge
            receiveStyles={{
              color: colors.PrimaryText,
              textAlign: 'left',
              marginBottom: 8,
            }}
            title={'Welcome back! Glad to see you, Again!'}
          />
          <CustomTextInput
            mode="outlined"
            label="Enter your email"
            receiveStyle={{marginTop: 16}}
          />
          <TextPasswordInput
            mode="outlined"
            label="Enter your password"
            receiveStyle={{marginVertical: 16}}
          />
          <SmallBold
            receiveStyle={{marginBottom: 16, textAlign: 'right'}}
            title={'Forgot Password ?'}
          />
          <CustomButton filled={true} title="Login" />
        </View>
        <View>
          <DividerWithText title={'Or Login with'} />
          <RegisterLoginWithSocialMedia />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenEnums.Registration)}>
          <View style={styles.bottomText}>
            <SmallNormal
              receiveStyle={{textAlign: 'center'}}
              title={'Don’t have an account ? '}
            />
            <SmallBold
              receiveStyle={{color: colors.skyBlueShade}}
              title={' Register Now'}
            />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  bottomText: {
    marginBottom: 16,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
