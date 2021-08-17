import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

const SettingsScreen = () => {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Settings')} title="Home" />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
