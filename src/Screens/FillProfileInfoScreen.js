import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomButton from '../Component/CustomButton';

const FillProfileInfoScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <CustomButton filled={true} title="Save and Continue" />
      </View>
    </>
  );
};

export default FillProfileInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
