import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

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
      <SettingItemCards />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
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
});
