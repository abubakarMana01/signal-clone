import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ChatCardItem from '../components/ChatCardItem';
import {colors} from '../constants';
import ChatRoom from '../data/ChatRooms';
import Users from '../data/Users';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Users}
        renderItem={({item}) => {
          return (
            <ChatCardItem lastMessage={ChatRoom[4].lastMessage} user={item} />
          );
        }}
      />
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Camera')}
          activeOpacity={0.8}
          style={{...styles.icon, backgroundColor: colors.light}}>
          <MaterialCommunityIcons name="camera" color={colors.grey} size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{...styles.icon, backgroundColor: colors.primary}}>
          <MaterialCommunityIcons
            name="pencil"
            color={colors.light}
            size={24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  icon: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    elevation: 5,
  },
});
