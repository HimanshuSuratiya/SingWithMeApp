import {StyleSheet} from 'react-native';
import React from 'react';
import CustomText from '../CustomText';

const HeadingLarge = ({title, receiveStyles}) => {
  return (
    <CustomText
      customStyle={[styles.heading, receiveStyles]}
      variant={'headlineLarge'}
      title={title}
    />
  );
};

export default HeadingLarge;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 8,
  },
});
