import React from 'react';
import {View} from 'react-native';
import {Text, withTheme} from 'react-native-paper';
import firebase from "firebase/app";

async function loginWithGoogle(){

}

async function loginWithEmail(){

}

const HomeScreen = (props) => {
  const {theme} = props;



  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: theme.colors.background}}>
      <Text theme={theme}>HomeScreen</Text>
    </View>
  )
}

export default withTheme(HomeScreen);
