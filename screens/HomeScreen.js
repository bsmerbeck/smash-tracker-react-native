import React, {useContext} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {StackActions} from "@react-navigation/native";
import {Headline, Paragraph, Button, withTheme} from 'react-native-paper'
import useStatusBar from '../hooks/useStatusBar';
import { logout } from '../components/Firebase/firebase';
import {AuthUserContext} from "../navigation/AuthUserProvider";
import firebase from 'firebase';
import AppButton from "../components/AppButton";

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
      <View style={{justifyContent: 'flex-start', alignItems: 'center', flex: 2, width: "100%",  position: 'absolute', top: 0}}>
        <Image source={require('../assets/classic-mode-banner.jpg')} style={styles.logo} />
        <Headline style={{marginTop: 50, color: "#fff", fontSize: 32, fontWeight: "bold"}}>Smash Tracker</Headline>
        <Paragraph style={{textAlign: "center", margin: 20}}>
          Smash Tracker is a fan-made dashboard to track your Smash Ultimate
          matches. By reporting your matches, the tracker will display your
          progress. View your best and worst matchups, progress by character,
          and more. Smash Tracker is ALWAYS open to feature suggestions.
        </Paragraph>
      </View>
      <View style={{width: "100%", justifyContent: 'flex-end', alignItems: "center", flex: 1, paddingBottom: 60}}>
        <AppButton title="Start"
          style={{width: "80%", paddingTop: 5, paddingBottom: 5, margin: 5}}
          color="primary"  onPress={goToCharacter}/>
        <AppButton
          title="Sign Out"
          style={{width: "80%", paddingTop: 5, paddingBottom: 5, margin: 5}}
          color="mediumGrey"  onPress={handleSignOut}/>
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
    margin: 0
  },
  logo: {
    width: "100%",
    height: 100
  },
});
