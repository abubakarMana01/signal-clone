import React from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {colors} from '../constants';

const ChatMessageInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity activeOpacity={0.7}>
          <FontAwesome
            name="smile-o"
            style={styles.icon}
            size={26}
            color={colors.grey}
          />
        </TouchableOpacity>
        <TextInput style={styles.textInput} placeholder="Signal message" />
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="camera-outline"
            size={26}
            color={colors.grey}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="microphone-outline"
            size={26}
            color={colors.grey}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        color={colors.grey}
        style={styles.plusContainer}>
        <MaterialCommunityIcons name="plus" size={26} color={colors.light} />
      </TouchableOpacity>
    </View>
  );
};

export default ChatMessageInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00000010',
    borderRadius: 30,
    flex: 1,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
  },
  plusContainer: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
  icon: {
    paddingHorizontal: 5,
  },
});
