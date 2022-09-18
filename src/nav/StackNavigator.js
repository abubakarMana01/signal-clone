/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../constants';
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
import NewMessageScreen from '../screens/NewMessageScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {elevation: 0, shadowOpacity: 0},
        headerMode: Platform.OS === 'ios' ? 'screen' : 'float',
        headerBackTitle: 'Back',
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
              <View style={[styles.headerLeft, {marginLeft: 12}]}>
                <Text style={styles.headerLeftText}>AM</Text>
              </View>
            </TouchableWithoutFeedback>
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
      <Stack.Screen
        component={ChatRoomScreen}
        name="Chat room"
        options={({route}) => {
          return {
            headerTitle: Platform.select({
              ios: route.params.Chats.users[1].name,
              android: ({style}) => (
                <View
                  style={[
                    style,
                    {
                      flexDirection: 'row',
                      alignItems: 'center',
                    },
                  ]}>
                  <View style={styles.headerLeft}>
                    <Text style={styles.headerLeftText}>PD</Text>
                  </View>
                  <Text
                    style={{
                      fontSize: style.fontSize,
                      fontWeight: style.fontWeight,
                      marginLeft: 10,
                    }}>
                    {route.params.Chats.users[1].name}
                  </Text>
                </View>
              ),
            }),
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: '700',
            },
            headerBackTitle: 'Chats',
            headerRight: () => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableWithoutFeedback onPress={() => {}}>
                  <Ionicons
                    style={{marginRight: 15}}
                    name="videocam-outline"
                    size={24}
                    color="#424242"
                  />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => {}}>
                  <Ionicons
                    style={{marginRight: 15}}
                    name="call-outline"
                    size={22}
                    color="#424242"
                  />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => {}}>
                  <MaterialCommunityIcons
                    style={{marginRight: 10}}
                    name="dots-vertical"
                    size={24}
                    color="#424242"
                  />
                </TouchableWithoutFeedback>
              </View>
            ),
          };
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
        component={CameraScreen}
        name="Camera"
        options={{headerShown: false}}
      />
      <Stack.Screen component={NewMessageScreen} name="New message" />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  headerLeft: {
    height: 27,
    width: 27,
    backgroundColor: '#d1e0ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderColor: '#bdd3ff',
    borderWidth: 1,
  },
  headerLeftText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '700',
  },
  chatRoomHeaderBackImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
