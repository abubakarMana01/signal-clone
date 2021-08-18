import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import LinkedDevicesScreen from '../screens/LinkedDevicesScreen';
import ChatsSettingScreen from '../screens/ChatsSettingScreen';
import AppearanceScreen from '../screens/AppearanceScreen';
import PrivacyScreen from '../screens/PrivacyScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import DataAndStorageScreen from '../screens/DataAndStorageScreen';
import HelpScreen from '../screens/HelpScreen';
import InviteFriendsScreen from '../screens/InviteFriendsScreen';
import CameraScreen from '../screens/CameraScreen';
import {colors} from '../constants';
import ImagePreview from '../screens/ImagePreview';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {elevation: 0, shadowOpacity: 0},
        headerMode: 'screen',
      }}>
      <Stack.Screen
        component={HomeScreen}
        name="Home"
        options={{
          headerTitle: 'Mi Messenger',
          headerTitleStyle: {fontWeight: '700'},
          headerLeft: () => (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Settings')}>
              <View style={styles.homeHeaderLeft}>
                <Text style={styles.homeHeaderLeftText}>AM</Text>
              </View>
            </TouchableWithoutFeedback>
          ),
          headerRight: () => (
            // eslint-disable-next-line react-native/no-inline-styles
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableWithoutFeedback onPress={() => {}}>
                <Ionicons
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{marginRight: 20}}
                  name="search-outline"
                  size={24}
                  color="#424242"
                />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => {}}>
                <MaterialCommunityIcons
                  // eslint-disable-next-line react-native/no-inline-styles
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
      <Stack.Screen component={AccountScreen} name="Account" />
      <Stack.Screen component={LinkedDevicesScreen} name="Linked Devices" />
      <Stack.Screen component={AppearanceScreen} name="Appearance" />
      <Stack.Screen component={ChatsSettingScreen} name="Chats" />
      <Stack.Screen component={NotificationsScreen} name="Notifications" />
      <Stack.Screen component={PrivacyScreen} name="Privacy" />
      <Stack.Screen component={DataAndStorageScreen} name="Data and storage" />
      <Stack.Screen component={HelpScreen} name="Help" />
      <Stack.Screen component={InviteFriendsScreen} name="Invite friends" />
      <Stack.Screen
        component={ImagePreview}
        name="Image Preview"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={CameraScreen}
        name="Camera"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  homeHeaderLeft: {
    height: 27,
    width: 27,
    backgroundColor: '#d1e0ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginLeft: 20,
    borderColor: '#bdd3ff',
    borderWidth: 1,
  },
  homeHeaderLeftText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '700',
  },
});
