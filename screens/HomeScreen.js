import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import {StackActions} from "@react-navigation/native";
import {Headline, Paragraph, Button, withTheme} from 'react-native-paper'
import useStatusBar from '../hooks/useStatusBar';
import { logout } from '../components/Firebase/firebase';
import {AuthUserContext} from "../navigation/AuthUserProvider";
import firebase from 'firebase';

const HomeScreen = (props) => {
  //useStatusBar('dark-content');
  const {theme, navigation} = props;
  const { user, setUser } = useContext(AuthUserContext);
  const [primaryFighters, setPrimaryFighters] = React.useState([]);
  const primaryFighterRef = firebase.database().ref('/primaryFighters/' + user.uid);
  primaryFighterRef.once('value').then((snapshot) => {
    setPrimaryFighters(snapshot.val());
  })

  function goToCharacter(){
    if(primaryFighters.length === 0){
      navigation.dispatch(StackActions.push("ChoosePrimary"))
    } else {
      navigation.dispatch(StackActions.push("Dashboard"))
    }
  }


  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'flex-start', alignItems: 'center', flex: 2, marginTop: 30}}>
        <Headline>Smash Tracker</Headline>
        <Paragraph style={{textAlign: "center", margin: 20}}>
          Smash Tracker is a fan-made dashboard to track your Smash Ultimate
          matches. By reporting your matches, the tracker will display your
          progress. View your best and worst matchups, progress by character,
          and more. Smash Tracker is ALWAYS open to feature suggestions.
        </Paragraph>
      </View>
      <View style={{width: "100%", justifyContent: 'flex-end', alignItems: "center", flex: 1}}>
        <Button
          style={{width: "80%", paddingTop: 5, paddingBottom: 5, margin: 5}}
          mode="contained"
          color={theme.colors.secondary}  onPress={goToCharacter}>Start</Button>
        <Button
          style={{width: "80%", paddingTop: 5, paddingBottom: 5, margin: 5}}
          mode="contained"
          color={theme.colors.secondary}  onPress={handleSignOut}>Sign Out</Button>
      </View>
    </View>
  );
}

export default withTheme(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10
  }
});
