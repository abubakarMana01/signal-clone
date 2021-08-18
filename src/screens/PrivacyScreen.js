import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';

import SettingOptions from '../components/SettingOptions';
import Separator from '../components/Separator';

const PrivacyScreen = () => {
  return (
    <ScrollView>
      <SettingOptions title="Blocked" details="0 contacts" />

      <Separator />

      <SettingOptions
        switchPresent
        title="Read receipts"
        details="If read receipts are disabled, you won't be able to see read receipts from others"
      />
      <SettingOptions
        switchPresent
        title="Typing indicators"
        details="If typing indicators are disabled, you won't be able to see typing indicators from others"
      />

      <Separator />

      <Text style={styles.sectionTitle}>App Security</Text>
      <SettingOptions
        switchPresent
        title="Screen lock"
        details="Lock Signal when Android screen lock or fingerprint"
      />
      <SettingOptions
        switchPresent
        title="Screen lock inactivity timeout"
        details="None"
        detailsDisabled
      />
      <SettingOptions
        switchPresent
        title="Screen security"
        details="Block screenshots in the recent lists abd inside the app"
      />
      <SettingOptions
        switchPresent
        title="Incognito keyboard"
        details="Request keyboard to disable personalized learning"
      />
      <SettingOptions details="This setting is not a guarantee and your keyboard may ignore it. Learn more" />
      <SettingOptions title="Priority" />

      <Text style={styles.sectionTitle}>Calls</Text>
      <SettingOptions switchPresent title="Notifications" />
      <SettingOptions title="Ringtone" details="Default (MiRemix.ogg)" />
      <SettingOptions switchPresent title="Vibrate" />

      <Separator />

      <SettingOptions
        title="Advanced"
        details="Signal messages and calls, always relay calls and sealed sender"
      />
    </ScrollView>
  );
};

export default PrivacyScreen;

const styles = StyleSheet.create({
  sectionTitle: {
    fontWeight: '700',
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
  },
});
