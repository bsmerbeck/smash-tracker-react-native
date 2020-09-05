import React from 'react';
import {View} from 'react-native';
import {Text, withTheme} from 'react-native-paper';


const ChooseSecondaryScreen = (props) => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Choose Secondary</Text>
    </View>
  )
}

export default withTheme(ChooseSecondaryScreen);
