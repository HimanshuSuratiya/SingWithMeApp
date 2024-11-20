import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {useTheme} from 'react-native-paper';

const CustomButton = ({filled, handleClick, title, style}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  const finalStyle = [styles.commonBtn, style];
  const labelStyle = [styles.label];

  if (filled) {
    finalStyle.push({
      backgroundColor: colors.PrimaryButton,
    });
    labelStyle.push({color: colors.InvertedText});
  } else {
    finalStyle.push({borderColor: colors.PrimaryText, borderWidth: 1});
    labelStyle.push({color: colors.PrimaryText});
  }

  return (
    <Button
      mode={filled ? 'contained' : 'ontained'}
      contentStyle={styles.content}
      style={finalStyle}
      labelStyle={labelStyle}
      onPress={handleClick}>
      {title}
    </Button>
  );
};

const createStyles = colors =>
  StyleSheet.create({
    commonBtn: {
      borderRadius: 0,
      borderRadius: colors.SecondaryRounded,
    },
    content: {
      justifyContent: 'center',
      paddingTop: 18,
    },
    label: {
      fontSize: 18,
      height: '100%',
      width: '100%',
    },
  });

export default CustomButton;
