import React, {useState} from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {colors} from '../constants';

const SettingOptions = ({
  switchPresent,
  title,
  details,
  color = colors.dark,
  detailsDisabled,
  icon,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('#eee', false)}
      onPress={toggleSwitch}>
      <View style={styles.container}>
        <View style={styles.info}>
          {title && <Text style={[styles.title, {color}]}>{title}</Text>}
          {details && (
            <Text
              style={[
                styles.details,
                // eslint-disable-next-line react-native/no-inline-styles
                {color: detailsDisabled ? '#00000040' : colors.grey},
              ]}>
              {details}
            </Text>
          )}
        </View>
        {switchPresent && (
          <Switch
            trackColor={{false: '#b3b3b3', true: '#2C6BED50'}}
            thumbColor={isEnabled ? colors.primary : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        )}
        {icon && <EvilIcons name="external-link" color="#363636" size={27} />}
      </View>
    </TouchableNativeFeedback>
  );
};

export default SettingOptions;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: colors.black,
  },
  details: {
    color: colors.grey,
    width: '90%',
  },
});
