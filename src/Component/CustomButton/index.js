import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {useTheme} from 'react-native-paper';

const CustomButton = ({filled, handleClick, title, style}) => {
  const {colors} = useTheme();
  const finalStyle = [styles.commonBtn, style];
  const labelStyle = [styles.label];

  if (filled) {
    finalStyle.push({backgroundColor: colors.buttonBlack});
    labelStyle.push({color: colors.white});
  } else {
    finalStyle.push({borderColor: colors.buttonBlack, borderWidth: 1});
    labelStyle.push({color: colors.buttonBlack});
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

const styles = StyleSheet.create({
  commonBtn: {
    borderRadius: 0,
  },
  content: {
    justifyContent: 'center',
    paddingTop: 16,
  },
  label: {
    fontSize: 18,
    height: '100%',
    width: '100%',
  },
});

export default CustomButton;
