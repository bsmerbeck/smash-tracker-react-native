import React from 'react';
import {View} from 'react-native';
import {Text, withTheme} from 'react-native-paper';


const MatchupsScreen = (props) => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Matchups</Text>
    </View>
  )
}

export default withTheme(MatchupsScreen);
