import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

import SettingOptions from '../components/SettingOptions';
import Separator from '../components/Separator';

const ChatsSettingScreen = () => {
  return (
    <ScrollView>
      <SettingOptions title="SMS and MMS" />
      <SettingOptions
        switchPresent
        title="Generate link previews"
        details="Retrieve link previews directly from websites for messages you send"
      />
      <SettingOptions
        switchPresent
        title="Use address book photos"
        details="Display contact photos from your address book if availables"
      />

      <Separator />

      <Text style={styles.sectionTitle}>Keyboard</Text>
      <SettingOptions switchPresent title="Use system emoji" />
      <SettingOptions switchPresent title="Enter key sends" />

      <Separator />

      <Text style={styles.sectionTitle}>Backups</Text>
      <SettingOptions title="Chat backups" details="Disabled" />
    </ScrollView>
  );
};

export default ChatsSettingScreen;

const styles = StyleSheet.create({
  sectionTitle: {
    fontWeight: '700',
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
  },
});
