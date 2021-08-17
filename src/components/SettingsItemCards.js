import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const SettingItemCard = ({text, icon, iconRight}) => {
  return (
    <View style={styles.card}>
      <MaterialCommunityIcons name={icon} color="#363636" size={27} />
      <Text style={styles.text}>{text}</Text>
      {iconRight && (
        <EvilIcons name="external-link" color="#363636" size={27} />
      )}
    </View>
  );
};

export default SettingItemCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    marginLeft: 20,
    color: '#363636',
    fontSize: 16,
    flex: 1,
  },
});
