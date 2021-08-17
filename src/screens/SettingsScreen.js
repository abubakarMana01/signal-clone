import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import SettingItemCards from '../components/SettingsItemCards';
import {colors} from '../constants';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => {}}>
        <View style={styles.profileCard}>
          <View style={styles.profileCardLeft}>
            <Text style={styles.profileCardLeftText}>AM</Text>
          </View>
          <View style={styles.profileCardRight}>
            <Text style={styles.profileName}>Abubakar Mana</Text>
            <Text style={styles.phone}>+234 808 281 3527</Text>
          </View>
        </View>
      </TouchableHighlight>

      <ScrollView>
        <SettingItemCards text="Account" icon="account-circle-outline" />
        <SettingItemCards text="Linked Devices" icon="devices" />
        <View style={styles.separator} />
        <SettingItemCards text="Appearance" icon="weather-sunny" />
        <SettingItemCards text="Chats" icon="chat-outline" />
        <SettingItemCards text="Privacy" icon="lock-outline" />
        <SettingItemCards text="Data and storage" icon="weather-sunny" />
        <View style={styles.separator} />
        <SettingItemCards text="Help" icon="help-circle-outline" />
        <SettingItemCards text="Invite your friends" icon="email-outline" />
        <SettingItemCards
          text="Donate to signal"
          icon="heart-outline"
          iconRight="external-link"
        />
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileCard: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileCardLeft: {
    height: 70,
    width: 70,
    backgroundColor: '#d1e0ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    marginLeft: 20,
    borderColor: '#bdd3ff',
    borderWidth: 1,
  },
  profileCardLeftText: {
    color: colors.primary,
    fontSize: 32,
    fontWeight: '700',
  },
  profileCardRight: {
    marginLeft: 20,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
  },
  phone: {
    color: colors.grey,
  },
  separator: {
    borderTopColor: '#eee',
    borderTopWidth: 2,
    marginVertical: 20,
  },
});
