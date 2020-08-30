import React from 'react';
import {View} from 'react-native';
import {Text, withTheme} from 'react-native-paper';


const ChoosePrimaryScreen = (props) => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Choose Primary</Text>
    </View>
  )
}

export default withTheme(ChoosePrimaryScreen);
