import React from 'react';
import {StyleSheet, View} from 'react-native';

const Separator = () => {
  return <View style={styles.separator} />;
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    borderTopColor: '#eee',
    borderTopWidth: 2,
    marginVertical: 20,
  },
});
