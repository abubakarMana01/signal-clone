import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';

import SettingOptions from '../components/SettingOptions';
import Separator from '../components/Separator';

const DataAndStorageScreen = () => {
  return (
    <ScrollView>
      <SettingOptions title="Manage Storage" details="0B" />

      <Separator />

      <Text style={styles.sectionTitle}>Media auto-download</Text>
      <SettingOptions title="When using mobile data" details="Images, Audio" />
      <SettingOptions
        title="When using Wi-Fi"
        details="Images, Audio, Video, Documents"
      />
      <SettingOptions title="When roaming" details="none" />

      <Separator />

      <Text style={styles.sectionTitle}>Calls</Text>
      <SettingOptions title="Use less data for calls" details="Never" />
      <SettingOptions details="Using less data may improve calls on bad networks" />

      <Separator />

      <Text style={styles.sectionTitle}>Proxy</Text>
      <SettingOptions title="Use proxy" details="Off" />
    </ScrollView>
  );
};

export default DataAndStorageScreen;

const styles = StyleSheet.create({
  sectionTitle: {
    fontWeight: '700',
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
  },
});
