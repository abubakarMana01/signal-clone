import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../constants';

const SearchBar = () => {
  return (
    <View>
      <TextInput
        placeholder="Search name or number"
        style={styles.placeholder}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  placeholder: {
    backgroundColor: '#00000030',
    marginHorizontal: 20,
    borderRadius: 30,
    padding: 10,
    color: colors.mediumDark,
  },
});
