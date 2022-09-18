import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';
import Separator from '../components/Separator';

import SettingItemCards from '../components/SettingsItemCards';
import {colors} from '../constants';

const SettingsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#eee', false)}
        onPress={() => {}}>
        <View style={styles.profileCard}>
          <View style={styles.profileCardLeft}>
            <Text style={styles.profileCardLeftText}>AM</Text>
          </View>
          <View style={styles.profileCardRight}>
            <Text style={styles.profileName}>Abubakar Mana</Text>
            <Text style={styles.phone}>+234 808 431 8321</Text>
          </View>
        </View>
      </TouchableNativeFeedback>

      <ScrollView>
        <SettingItemCards
          text="Account"
          icon="account-circle-outline"
          onPress={() => navigation.navigate('Account')}
        />
        <SettingItemCards
          text="Linked Devices"
          icon="devices"
          onPress={() => navigation.navigate('Linked Devices')}
        />

        <Separator />

        <SettingItemCards
          text="Appearance"
          icon="weather-sunny"
          onPress={() => navigation.navigate('Appearance')}
        />
        <SettingItemCards
          text="Chats"
          icon="chat-outline"
          onPress={() => navigation.navigate('Chats')}
        />
        <SettingItemCards
          text="Notifications"
          icon="bell-outline"
          onPress={() => navigation.navigate('Notifications')}
        />
        <SettingItemCards
          text="Privacy"
          icon="lock-outline"
          onPress={() => navigation.navigate('Privacy')}
        />
        <SettingItemCards
          text="Data and storage"
          icon="weather-sunny"
          onPress={() => navigation.navigate('Data and storage')}
        />

        <Separator />

        <SettingItemCards
          text="Help"
          icon="help-circle-outline"
          onPress={() => navigation.navigate('Help')}
        />
        <SettingItemCards
          text="Invite your friends"
          icon="email-outline"
          onPress={() => navigation.navigate('Invite friends')}
        />
        <SettingItemCards
          text="Donate to signal"
          icon="heart-outline"
          onPress={() => {}}
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
    paddingVertical: 20,
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
});
