import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {colors} from '../constants';
import ChatMessageInput from '../components/ChatMessageInput';

const ChatRoomScreen = () => {
  const route = useRoute();

  const isMyMessage = message => {
    return message.user.id === 'u1';
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={route.params.Chats.messages}
        ListFooterComponent={() => <View style={{marginBottom: 50}} />}
        renderItem={({item}) => (
          <View
            style={[
              styles.card,
              {
                backgroundColor: isMyMessage(item) ? colors.primary : '#eee',
                alignSelf: isMyMessage(item) ? 'flex-end' : 'flex-start',
              },
            ]}>
            <Text
              style={[
                styles.message,
                {color: !isMyMessage(item) ? colors.dark : colors.light},
              ]}>
              {item.content}
            </Text>
            <Text
              style={[
                styles.time,
                {
                  color: !isMyMessage(item) ? colors.grey : '#ffffff99',
                },
              ]}>
              {new Date(item.createdAt).getHours() +
                ':' +
                new Date(item.createdAt).getMinutes()}
            </Text>
          </View>
        )}
      />
      <ChatMessageInput />
    </View>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
  card: {
    marginVertical: 3,
    padding: 10,
    paddingBottom: 7,
    borderRadius: 15,
    marginHorizontal: 10,
    maxWidth: '80%',
  },
  message: {
    fontSize: 16,
  },
  time: {
    fontSize: 12,
    marginTop: 3,
    alignSelf: 'flex-end',
  },
});
