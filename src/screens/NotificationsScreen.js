import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';

import SettingOptions from '../components/SettingOptions';
import Separator from '../components/Separator';

const NotificationsScreen = () => {
  return (
    <ScrollView>
      <Text style={styles.sectionTitle}>Messages</Text>
      <SettingOptions switchPresent title="Notifications" />
      <SettingOptions title="Sound" details="Default (WaterDrop_preview.ogg)" />
      <SettingOptions switchPresent title="Vibrate" />
      <SettingOptions switchPresent title="LED color" />
      <SettingOptions switchPresent title="In-chat sounds" />
      <SettingOptions title="Repeat alerts" details="Never" />
      <SettingOptions title="Show" details="Name and message" />
      <SettingOptions title="Priority" />

      <Separator />

      <Text style={styles.sectionTitle}>Calls</Text>
      <SettingOptions switchPresent title="Notifications" />
      <SettingOptions title="Ringtone" details="Default (MiRemix.ogg)" />
      <SettingOptions switchPresent title="Vibrate" />

      <Separator />

      <Text style={styles.sectionTitle}>Notify when...</Text>
      <SettingOptions switchPresent title="Contact joins Signal" />
    </ScrollView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  sectionTitle: {
    fontWeight: '700',
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
  },
});
