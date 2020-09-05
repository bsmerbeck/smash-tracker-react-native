import React from 'react';
import {View} from 'react-native';
import {Text, withTheme} from 'react-native-paper';


const MatchDataScreen = (props) => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>MatchData</Text>
    </View>
  )
}

export default withTheme(MatchDataScreen);
