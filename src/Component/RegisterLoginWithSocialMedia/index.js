import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const RegisterLoginWithSocialMedia = () => {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  return (
    <>
      <View style={styles.mainWrapper}>
        <View style={styles.box}>
          <FontAwesome
            name={'facebook'}
            size={38}
            color={colors.headerIconColor}
          />
        </View>
        <View style={styles.box}>
          <FontAwesome
            name={'google'}
            size={38}
            color={colors.headerIconColor}
          />
        </View>
        <View style={styles.box}>
          <FontAwesome
            name={'apple'}
            size={38}
            color={colors.headerIconColor}
          />
        </View>
      </View>
    </>
  );
};

export default RegisterLoginWithSocialMedia;

const createStyles = colors =>
  StyleSheet.create({
    mainWrapper: {
      paddingVertical: 16,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    box: {
      borderRadius: 3,
      borderWidth: 1,
      padding: 8,
      alignItems: 'center',
      textAlign: 'center',
      width: '31%',
      borderColor: colors.iconBorderColor,
    },
  });
