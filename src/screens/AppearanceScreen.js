import React from 'react';
import {ScrollView} from 'react-native';

import SettingOptions from '../components/SettingOptions';

const AppearanceScreen = () => {
  return (
    <ScrollView>
      <SettingOptions title="Theme" details="System default" />
      <SettingOptions title="Chat color & wallpaper" />
      <SettingOptions title="Message font size" details="Normal" />
      <SettingOptions title="Language" details="System default" />
    </ScrollView>
  );
};

export default AppearanceScreen;
