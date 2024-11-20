import React from 'react';
import ScreenEnums from './ScreenEnums';
import {StyleSheet, View} from 'react-native';
import CustomButton from '../Component/CustomButton';
import {useTheme} from 'react-native-paper';
import CustomText from '../Component/CustomText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const StartupScreen = ({navigation}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <FontAwesome name={'photo'} size={60} color={colors.Primary} />
      </View>
      <CustomText
        customStyle={styles.heading}
        variant={'headlineLarge'}
        title={'Sing With Me'}
      />
      <CustomButton
        style={{marginTop: 32}}
        filled={true}
        handleClick={() => {
          navigation.navigate(ScreenEnums.Login);
        }}
        title="Login"
      />
      <CustomButton
        style={{marginTop: 16}}
        handleClick={() => {
          navigation.navigate(ScreenEnums.Registration);
        }}
        title="Register"
      />
      <View>
        <CustomText
          customStyle={styles.boldText}
          variant={'labelSmall'}
          title="Continue as a guest"
        />
      </View>
    </View>
  );
};

export default StartupScreen;

const createStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      paddingBottom: 0,
      justifyContent: 'flex-end',
    },
    icon: {
      paddingBottom: 8,
      alignItems: 'center',
    },
    boldText: {
      marginTop: 24,
      fontWeight: 'bold',
      fontSize: 14,
      color: colors.PrimaryText,
      textDecorationLine: 'underline',
      textAlign: 'center',
    },
    heading: {
      fontSize: 28,
      fontWeight: 'bold',
      letterSpacing: 0,
      lineHeight: 36,
      textAlign: 'center',
      color: colors.PrimaryText,
    },
  });
