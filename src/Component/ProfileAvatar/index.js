import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Surface, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ProfileAvatar() {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <Surface style={styles.avatarContainer}>
        <Avatar.Icon
          size={80}
          icon="account"
          style={styles.avatar}
          color={colors.DefaultIcons}
        />
        <View style={styles.plusBadge}>
          <Icon name="plus" size={16} color={colors.DefaultIcons} />
        </View>
      </Surface>
    </View>
  );
}

const createStyles = colors =>
  StyleSheet.create({
    container: {
      paddingTop: 8,
      paddingBottom: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarContainer: {
      position: 'relative',
      borderRadius: 100,
      padding: 20,
      elevation: 0,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: colors.DefaultIcons,
    },
    avatar: {
      backgroundColor: 'transparent',
    },
    plusBadge: {
      position: 'absolute',
      top: 0,
      right: 0,
      backgroundColor: 'white',
      borderRadius: 12,
      width: 24,
      height: 24,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#333333',
    },
  });
