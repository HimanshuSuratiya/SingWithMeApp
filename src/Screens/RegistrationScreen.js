import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomButton from '../Component/CustomButton';
import ScreenEnums from './ScreenEnums';
import RegisterLoginWithSocialMedia from '../Component/RegisterLoginWithSocialMedia';
import DividerWithText from '../Component/DividerWithText';
import HeadingLarge from '../Component/TextsComp/HeadingLarge';
import {useTheme} from 'react-native-paper';

const RegistrationScreen = ({navigation}) => {
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
          title={'Hello! Register to get started'}
        />
        <CustomButton
          filled={true}
          title="Registration"
          handleClick={() => {
            navigation.navigate(ScreenEnums.FillProfile);
          }}
        />
        <DividerWithText title={'Or Register with'} />
        <RegisterLoginWithSocialMedia />
      </View>
    </>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
