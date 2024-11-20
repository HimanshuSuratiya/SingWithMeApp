import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import CustomText from '../CustomText';

const SmallNormal = ({title, receiveStyle}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  return (
    <CustomText
      variant="titleSmall"
      customStyle={[styles.smallBoldText, receiveStyle]}
      title={title}
    />
  );
};

export default SmallNormal;

const createStyles = colors =>
  StyleSheet.create({
    smallBoldText: {
      color: colors.PrimaryText,
      fontSize: 15,
    },
  });
