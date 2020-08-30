import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';
import { Appbar, withTheme } from 'react-native-paper';
import {
  HomeScreen,
  ChoosePrimaryScreen,
  ChooseSecondaryScreen,
  FighterAnalyticsScreen,
  DashboardScreen,
  MatchupsScreen,
  MatchDataScreen
} from "../screens";

const Stack = createStackNavigator();

const StackNavigator = (props) => {
  const {theme} = props;

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: ({navigation}) => (
            <Appbar.Header
              style={{justifyContent: "flex-end", backgroundColor: '#ff0000'}}
              theme={theme}
            >
              <Appbar.Content
                onPress={() => navigation.navigate("Home")}
                title="Smash Tracker"/>
              <Appbar.Action
                icon="menu"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              />
            </Appbar.Header>
          ) }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen}/>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="ChoosePrimary" component={ChoosePrimaryScreen}/>
      <Stack.Screen name="ChooseSecondary" component={ChooseSecondaryScreen}/>
      <Stack.Screen name="FighterAnalytics" component={FighterAnalyticsScreen}/>
      <Stack.Screen name="Matchups" component={MatchupsScreen}/>
      <Stack.Screen name="MatchData" component={MatchDataScreen}/>
    </Stack.Navigator>
  );
};

export default withTheme(StackNavigator)
