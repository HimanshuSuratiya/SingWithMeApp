import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'react-native-paper';
import {Text} from 'react-native-paper';

const CustomHeader = ({navigation, title}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={[styles.headerBack, {borderColor: colors.iconBorderColor}]}
        onPress={() => navigation.goBack()}>
        <MCommunity
          name={'chevron-left'}
          size={30}
          color={colors.headerIconColor}
        />
      </TouchableOpacity>
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  headerBack: {
    borderWidth: 1,
    height: 41,
    width: 41,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
