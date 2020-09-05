import React from 'react';
import {View, Linking, Image, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
import {StackActions} from '@react-navigation/native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerContentOptions,
  DrawerItem} from "@react-navigation/drawer";
import {Drawer, Paragraph, Text, TouchableRipple, withTheme, Button, Avatar} from 'react-native-paper';
import Colors from "../utils/colors";
import {logout} from "../components/Firebase/firebase";


async function handleSignOut() {
  try {
    await logout();
  } catch (error) {
    console.log(error);
  }
}

const DrawerContent = (props) => {
  const {theme, navigation} = props;

  return (
    <DrawerContentScrollView
      contentContainerStyle={{flex: 1, flexDirection: "column", justifyContent: "space-between"}}
      {...props}>
        <Drawer.Section style={{justifyContent: 'flex-start', flex: 1}}>
          <DrawerItem
            label="Dashboard"
            onPress={() => navigation.navigate("Dashboard")}
            icon={({ size}) => (
              <MaterialIcons name="dashboard" color={theme.colors.primary} size={size}/>
            )}/>
          <DrawerItem
            label="Primary Fighters"
            onPress={() => navigation.dispatch(StackActions.push("ChoosePrimary"))}
            icon={({size}) => (
              <Ionicons name="md-person" color={theme.colors.primary} size={size}/>
            )}/>
          <DrawerItem
            label="Secondary Fighters"
            onPress={() => navigation.dispatch(StackActions.push("ChooseSecondary"))}
            icon={({ size}) => (
              <Ionicons name="md-people" color={theme.colors.primary} size={size}/>
            )}/>
          <DrawerItem
            label="Fighter Analytics"
            onPress={() => navigation.dispatch(StackActions.push("FighterAnalytics"))}
            icon={({size}) => (
              <MaterialIcons name="person-pin" color={theme.colors.primary} size={size}/>
            )}/>
          <DrawerItem
            label="Matchups"
            onPress={() => navigation.dispatch(StackActions.push("Matchups"))}
            icon={({size}) => (
              <MaterialCommunityIcons name="kabaddi" color={theme.colors.primary} size={size}/>
            )}/>
          <DrawerItem
            label="Match Data"
            onPress={() => navigation.dispatch(StackActions.push("MatchData"))}
            icon={({size}) => (
              <MaterialIcons name="timeline" color={theme.colors.primary} size={size}/>
            )}/>
          <DrawerItem
            label="Logout"
            onPress={() => handleSignOut()}
            icon={({size}) => (
              <MaterialCommunityIcons name="logout-variant" color={theme.colors.primary} size={size}/>
            )}/>
        </Drawer.Section>
        <Drawer.Section style={{ flex: 1, justifyContent: 'flex-end'}}>
          <TouchableOpacity
            style={{
              backgroundColor: theme.colors.primary,
              padding: 8,
              borderRadius: 4,
              flexDirection: 'row',
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
              marginBottom: 10,
            }}
            onPress={() => Linking.openURL("https://discord.gg/9TN8RFZ")}
          >
            <Avatar.Image size={30} source={require('./SSBU_TG-03.png')}/>
            <Text style={{flex: 1, marginRight: 30, fontWeight: 'bold', textAlign: 'center'}} theme={theme}>
              TRAINING GROUNDS
            </Text>
          </TouchableOpacity>
          <Button
            mode="contained"
            style={{backgroundColor: "#41a2d8", color: "#fff", padding: 1, width: "100%"}}
            onPress={() => Linking.openURL('https://donorbox.org/support-smash-tracker')}>
            Donate
          </Button>
        </Drawer.Section>

    </DrawerContentScrollView>
  )
}

export default withTheme(DrawerContent);
