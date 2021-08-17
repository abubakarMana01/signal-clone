import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {colors} from '../constants';

const ChatCardItem = ({user}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: user.imageUri}} />
      </View>
      <View style={styles.info}>
        <View style={styles.infoTop}>
          <Text numberOfLines={1} style={styles.name}>
            {user.name}
          </Text>
          <Text style={styles.time}>1h</Text>
        </View>
        <View style={styles.infoBottom}>
          <Text numberOfLines={1} style={styles.lastMessage}>
            Last message
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ChatCardItem;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.light,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderColor: '#b3b3b3',
    borderWidth: 1,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  info: {
    paddingHorizontal: 10,
    flex: 1,
  },
  infoTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
  },
  time: {
    fontSize: 12,
    color: '#787878',
  },
  lastMessage: {
    color: '#787878',
  },
});
