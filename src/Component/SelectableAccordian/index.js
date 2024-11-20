import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {List, TouchableRipple, useTheme} from 'react-native-paper';

export default function SelectableAccordian({data, receiveStyle}) {
  const [expanded, setExpanded] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(data[0]);
  const {colors} = useTheme();
  const styles = createStyles(colors);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={[styles.container, receiveStyle]}>
      <List.Accordion
        title={selectedLevel}
        expanded={expanded}
        onPress={handlePress}
        style={styles.accordion}
        titleStyle={styles.accordionTitle}>
        {data.map((level, index) => (
          <TouchableRipple
            keyExtractor={index}
            key={level}
            onPress={() => setSelectedLevel(level)}
            style={[
              styles.levelItem,
              {paddingHorizontal: 16},
              selectedLevel === level && {
                backgroundColor: colors.MutedText + '20',
              },
            ]}>
            <List.Item
              title={level}
              left={() => (
                <List.Icon
                  icon={
                    selectedLevel === level ? 'check-circle' : 'circle-outline'
                  }
                  color={
                    selectedLevel === level
                      ? colors.PrimaryButton
                      : colors.SecondaryText
                  }
                />
              )}
              titleStyle={[
                styles.levelText,
                selectedLevel === level && {color: colors.PrimaryButton},
              ]}
            />
          </TouchableRipple>
        ))}
      </List.Accordion>
    </View>
  );
}

const createStyles = colors =>
  StyleSheet.create({
    container: {
      paddingVertical: 8,
    },
    heading: {
      fontSize: 24,
      fontWeight: '600',
      marginBottom: 16,
    },
    accordion: {
      backgroundColor: colors.LightGray,
      borderRadius: colors.PrimaryRounded,
      height: 56,
    },
    accordionTitle: {
      color: colors.SecondaryText,
      fontSize: 16,
    },
    levelItem: {
      borderBottomWidth: 1,
      borderBottomColor: colors.MutedText,
    },
    levelText: {
      fontSize: 16,
    },
  });
