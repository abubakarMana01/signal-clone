import React from 'react';
import {ScrollView} from 'react-native';

import SettingOptions from '../components/SettingOptions';
import Separator from '../components/Separator';

const HelpScreen = () => {
  return (
    <ScrollView>
      <SettingOptions title="Support center" icon />
      <SettingOptions title="Contact us" />

      <Separator />

      <SettingOptions title="Version" details="5.20.4" />
      <SettingOptions title="Debug log" />
      <SettingOptions title="Terms & Privacy Policy" icon />
      <SettingOptions
        details={'Copyright Signal Messenger\nLicensed under the GPLv3'}
      />
    </ScrollView>
  );
};

export default HelpScreen;
