import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import CustomText from '../CustomText';
import SmallBold from "../TextsComp/SmallBold";

const DividerWithText = ({title}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.divider}>
      <View style={styles.dividerLine} />
      <SmallBold title={title} receiveStyle={{marginHorizontal: 10}}/>
      <View style={styles.dividerLine} />
    </View>
  );
};

export default DividerWithText;

const createStyles = colors =>
  StyleSheet.create({
    divider: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 10,
    },
    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: colors.dividerTextLine,
    },
    dividerText: {
      marginHorizontal: 10,
      color: colors.dividerText,
      fontSize: 14,
      fontWeight: '500',
    },
  });
