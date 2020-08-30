import React from 'react';
import {View} from 'react-native';
import {Text, withTheme} from 'react-native-paper';


const DashboardScreen = (props) => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Dashboard</Text>
    </View>
  )
}

export default withTheme(DashboardScreen);
