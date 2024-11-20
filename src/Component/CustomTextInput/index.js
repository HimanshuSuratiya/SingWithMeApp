import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {TextInput, useTheme} from 'react-native-paper';

export default function CustomTextInput({mode, label, receiveStyle}) {
  const [value, setValue] = useState('');
  const {colors} = useTheme();
  const styles = createStyles(colors);

  return (
    <TextInput
      mode={mode}
      label={label}
      value={value}
      onChangeText={setValue}
      style={[styles.input, receiveStyle]}
      outlineStyle={styles.outline}
      contentStyle={styles.inputContent}
      theme={{
        colors: {
          primary: colors.primaryText,
        },
      }}
    />
  );
}

const createStyles = colors =>
  StyleSheet.create({
    input: {
      backgroundColor: colors.white,
    },
    outline: {
      borderRadius: 8,
      borderColor: colors.PrimaryButton,
    },
    inputContent: {
      paddingTop: 8,
      paddingBottom: 8,
      fontSize: 16,
    },
  });
