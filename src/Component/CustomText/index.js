import React from 'react';
import {Text} from 'react-native-paper';

const CustomText = ({customStyle, variant, title}) => {
  return (
    <>
      <Text style={customStyle} variant={variant}>
        {title}
      </Text>
    </>
  );
};

export default CustomText;
