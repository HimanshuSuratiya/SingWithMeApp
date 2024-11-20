import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {List, Text, Menu} from 'react-native-paper';

const data = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

export default function CustomDropDown() {
  const [visible, setVisible] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('Beginner');
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What's Your Experience Level?</Text>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <List.Item
            title={selectedLevel}
            onPress={openMenu}
            right={props => <List.Icon {...props} icon="chevron-down" />}
            style={styles.selector}
            titleStyle={styles.selectorText}
          />
        }>
        {data.map(level => (
          <Menu.Item
            key={level}
            onPress={() => {
              setSelectedLevel(level);
              closeMenu();
            }}
            title={level}
          />
        ))}
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  selector: {
    backgroundColor: '#F8F9FA',
    borderRadius: 0,
    marginTop: 8,
  },
  selectorText: {
    color: '#6C757D',
    fontSize: 16,
  },
});
