import React, {useContext} from 'react';
import { View, StyleSheet, Button } from 'react-native';

import useStatusBar from '../hooks/useStatusBar';
import { logout } from '../components/Firebase/firebase';
import {AuthUserContext} from "../navigation/AuthUserProvider";
import firebase from 'firebase';

export default function HomeScreen() {
  useStatusBar('dark-content');
  const { user, setUser } = useContext(AuthUserContext);
  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={handleSignOut} />
      <Button title="loadFighters" onPress={() => {
        if(!user){
          return;
        } else {
          firebase.database().ref('/matches/' + user.uid).once('value')
            .then((snapshot) => {
              console.log(JSON.stringify(snapshot))
            })
        }
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
