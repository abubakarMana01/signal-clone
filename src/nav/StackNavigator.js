import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';
import {colors} from '../constants';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        component={HomeScreen}
        name="Home"
        options={{
          headerTitle: 'Signal',
          headerTitleStyle: {fontWeight: '700'},
          headerLeft: () => (
            <View style={styles.homeHeaderLeft}>
              <Text style={styles.homeHeaderLeftText}>AM</Text>
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableWithoutFeedback onPress={() => {}}>
                <Ionicons
                  style={{marginRight: 20}}
                  name="search-outline"
                  size={24}
                  color="#424242"
                />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => {}}>
                <MaterialCommunityIcons
                  style={{marginRight: 10}}
                  name="dots-vertical"
                  size={26}
                  color="#424242"
                />
              </TouchableWithoutFeedback>
            </View>
          ),
        }}
      />
      <Stack.Screen component={SettingsScreen} name="Settings" />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  homeHeaderLeft: {
    height: 25,
    width: 25,
    backgroundColor: '#d1e0ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12.5,
    marginLeft: 20,
  },
  homeHeaderLeftText: {
    color: colors.primary,
    fontSize: 12,
  },
});
