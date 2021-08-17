import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

import {colors} from '../constants';

const ChatCardItem = ({user}) => {
  return (
    <TouchableHighlight
      delayLongPress={2}
      activeOpacity={0.5}
      underlayColor={colors.primary}
      onPress={() => {}}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: user.imageUri}} />
        </View>
        <View style={styles.info}>
          <View style={styles.infoTop}>
            <Text numberOfLines={1} style={styles.name}>
              {user.name}
            </Text>
            <Text style={styles.time}>Wed</Text>
          </View>
          <View style={styles.infoBottom}>
            <Text numberOfLines={1} style={styles.lastMessage}>
              Last message
            </Text>
            <Text style={styles.time}>1h</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ChatCardItem;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: colors.light,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderColor: '#dedede',
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
    color: colors.mediumDark,
  },
  time: {
    fontSize: 12,
    color: colors.grey,
  },
  lastMessage: {
    color: colors.grey,
    flex: 1,
  },
});
