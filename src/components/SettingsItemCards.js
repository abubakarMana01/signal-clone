import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {colors} from '../constants';

const SettingItemCard = ({text}) => {
  return (
    <ScrollView>
      <View style={styles.card}>
        <MaterialCommunityIcons
          name="account-circle-outline"
          color="#363636"
          size={27}
        />
        <Text style={styles.text}>Account</Text>
      </View>
      <View style={styles.card}>
        <MaterialCommunityIcons name="devices" color="#363636" size={27} />
        <Text style={styles.text}>Linked Devices</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.card}>
        <MaterialCommunityIcons
          name="weather-sunny"
          color="#363636"
          size={27}
        />
        <Text style={styles.text}>Appearance</Text>
      </View>
      <View style={styles.card}>
        <MaterialCommunityIcons name="chat-outline" color="#363636" size={27} />
        <Text style={styles.text}>Chats</Text>
      </View>
      <View style={styles.card}>
        <MaterialCommunityIcons name="lock-outline" color="#363636" size={27} />
        <Text style={styles.text}>Privacy</Text>
      </View>
      <View style={styles.card}>
        <MaterialCommunityIcons
          name="account-circle-outline"
          color="#363636"
          size={27}
        />
        <Text style={styles.text}>Data and storage</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.card}>
        <MaterialCommunityIcons
          name="help-circle-outline"
          color="#363636"
          size={27}
        />
        <Text style={styles.text}>Help</Text>
      </View>
      <View style={styles.card}>
        <MaterialCommunityIcons
          name="email-outline"
          color="#363636"
          size={27}
        />
        <Text style={styles.text}>Invite your friends</Text>
      </View>
      <View style={styles.card}>
        <MaterialCommunityIcons
          name="heart-outline"
          color="#363636"
          size={27}
        />
        <Text style={{...styles.text, flex: 1}}>Donate to signal</Text>
        <EvilIcons name="external-link" color="#363636" size={27} />
      </View>
    </ScrollView>
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
  },
  separator: {
    borderTopColor: '#eee',
    borderTopWidth: 2,
    marginVertical: 20,
  },
});
