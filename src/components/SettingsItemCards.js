import React from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const SettingItemCard = ({text, icon, onPress, iconRight}) => {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('#eee', false)}
      onPress={onPress}>
      <View style={styles.card}>
        <MaterialCommunityIcons name={icon} color="#363636" size={27} />
        <Text style={styles.text}>{text}</Text>
        {iconRight && (
          <EvilIcons name="external-link" color="#363636" size={27} />
        )}
      </View>
    </TouchableNativeFeedback>
  );
};

export default SettingItemCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  text: {
    marginLeft: 20,
    color: '#363636',
    fontSize: 16,
    flex: 1,
  },
});
