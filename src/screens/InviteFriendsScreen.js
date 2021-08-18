import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import {colors} from '../constants';

const InviteFriendsScreen = () => {
  const [inviteMessage, setInviteMessage] = useState(
    "Let's switch to Signal:\nhttps://signal.org/install",
  );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Friends don't let friends chat unencrypted
      </Text>
      <TextInput
        multiline
        style={styles.textInput}
        onChangeText={setInviteMessage}
        value={inviteMessage}
      />
      <TouchableNativeFeedback onPress={() => {}}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Share</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default InviteFriendsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  text: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
  textInput: {
    width: '100%',
    borderColor: '#00000050',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    fontSize: 16,
    padding: 10,
    paddingBottom: 30,
  },
  button: {
    width: '100%',
    marginTop: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.light,
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
