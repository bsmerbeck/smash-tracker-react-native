import React from 'react';
import {View} from 'react-native';
import {Text, withTheme} from 'react-native-paper';



const LoginScreen = (props) => {
  const {theme} = props;
  return (
    <View theme={theme} style={{backgroundColor: theme.colors.background, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login</Text>
    </View>
  )


}

export default withTheme(LoginScreen);
