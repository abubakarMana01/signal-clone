import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';

import SettingOptions from '../components/SettingOptions';
import Separator from '../components/Separator';

const AccountScreen = () => {
  return (
    <ScrollView>
      <Text style={styles.sectionTitle}>Signal PIN</Text>
      <SettingOptions title="Change your PIN" />
      <SettingOptions
        switchPresent={true}
        title="Pin reminders"
        details="You'll be asked less frequently over time"
      />
      <SettingOptions
        switchPresent={true}
        title="Registration Lock"
        details="Require your Signal PIN to register your phonr number with signal again"
      />
      <SettingOptions title="Advanced PIN settings" />

      <Separator />

      <Text style={styles.sectionTitle}>Account</Text>
      <SettingOptions
        title="Transfer account"
        details="Transfer account to a new android device"
      />
      <SettingOptions title="Delete account" color="red" />
    </ScrollView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  sectionTitle: {
    fontWeight: '700',
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  deleteText: {
    color: 'red',
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
  },
});
