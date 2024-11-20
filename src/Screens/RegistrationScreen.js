import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import CustomButton from '../Component/CustomButton';
import ScreenEnums from './ScreenEnums';
import RegisterLoginWithSocialMedia from '../Component/RegisterLoginWithSocialMedia';
import DividerWithText from '../Component/DividerWithText';
import HeadingLarge from '../Component/TextsComp/HeadingLarge';
import {useTheme} from 'react-native-paper';
import CustomTextInput from '../Component/CustomTextInput';
import TextPasswordInput from '../Component/TextPasswordInput';
import SmallNormal from '../Component/TextsComp/SmallNormal';
import SmallBold from '../Component/TextsComp/SmallBold';

const RegistrationScreen = ({navigation}) => {
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
            title={'Hello! Register to get started'}
          />
          <CustomTextInput
            mode="outlined"
            label="User Name"
            receiveStyle={{marginTop: 16}}
          />
          <CustomTextInput
            mode="outlined"
            label="Emial"
            receiveStyle={{marginVertical: 8}}
          />
          <TextPasswordInput
            mode="outlined"
            label="Password"
            receiveStyle={{marginVertical: 8}}
          />
          <TextPasswordInput
            mode="outlined"
            label="Confirm Password"
            receiveStyle={{marginBottom: 16}}
          />
          <CustomButton
            filled={true}
            title="Registration"
            handleClick={() => {
              navigation.navigate(ScreenEnums.FillProfile);
            }}
          />
        </View>
        <View>
          <DividerWithText title={'Or Register with'} />
          <RegisterLoginWithSocialMedia />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenEnums.Login)}>
          <View style={styles.bottomText}>
            <SmallNormal
              receiveStyle={{textAlign: 'center'}}
              title={'Already have an account ? '}
            />
            <SmallBold
              receiveStyle={{color: colors.skyBlueShade}}
              title={' Login Now'}
            />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RegistrationScreen;

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
