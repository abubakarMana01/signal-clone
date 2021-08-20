import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

export default function SearchBar() {
  return (
    <View style={{marginHorizontal: 20}}>
      <TextInput
        placeholder="Search name or number"
        style={styles.placeholder}
        placeholderTextColor={colors.mediumDark}
      />
      <MaterialCommunityIcons
        style={styles.icon}
        name="keypad"
        color={colors.mediumDark}
        size={21}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    backgroundColor: '#00000020',
    borderRadius: 30,
    paddingHorizontal: 20,
    color: colors.dark,
    fontSize: 16,
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 13,
  },
});
