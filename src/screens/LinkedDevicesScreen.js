import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../constants';

const LinkedDevicesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No devices linked</Text>

      <View style={styles.iconContainer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.icon}>
          <MaterialCommunityIcons name="plus" color={colors.light} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LinkedDevicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    marginTop: 160,
    fontSize: 20,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  icon: {
    backgroundColor: colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});
