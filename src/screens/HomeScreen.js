import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('Settings')}
        title="Settings"
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
