import React from 'react';
import {View} from 'react-native';
import {Text, withTheme} from 'react-native-paper';


const FighterAnalyticsScreen = (props) => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>FighterAnalytics</Text>
    </View>
  )
}

export default withTheme(FighterAnalyticsScreen);
