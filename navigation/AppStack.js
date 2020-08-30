import * as React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import navigationTheme from './navigationTheme';
import {Appbar, IconButton, useTheme, withTheme} from 'react-native-paper';
import {Ionicons, MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';
import {HomeScreen, DashboardScreen, ChoosePrimaryScreen} from "../screens";
import {createStackNavigator} from "@react-navigation/stack";
import StackNavigator from "./StackNavigator";
import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const AppStack = (props) => {
  const theme = useTheme();

  return (

    <Drawer.Navigator
      theme={navigationTheme}
      drawerStyle={{
        backgroundColor: '#424242'
      }}
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home"  component={StackNavigator}
         options={{
           drawerIcon: ({ size}) => (
             <MaterialIcons name="border-all" size={size} color={navigationTheme.colors.primary}/>
             )
         }}
      />

      {/*<Drawer.Screen name="Primary Fighters" component={ChoosePrimaryScreen}*/}
      {/*  options={ {*/}
      {/*    drawerIcon: ({ size}) => (*/}
      {/*      <Ionicons name="md-person" size={size} color={navigationTheme.colors.primary}/>*/}
      {/*    )*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Drawer.Screen name="Secondary Fighters" component={HomeScreen}*/}
      {/*   options={ {*/}
      {/*     drawerIcon: ({ size}) => (*/}
      {/*       <Ionicons name="md-people" size={size} color={navigationTheme.colors.primary}/>*/}
      {/*     )*/}
      {/*   }}*/}
      {/*/>*/}
      {/*<Drawer.Screen name="Fighter Analysis" component={HomeScreen}*/}
      {/* options={ {*/}
      {/*   drawerIcon: ({ size}) => (*/}
      {/*     <MaterialIcons name="person-pin" size={size} color={navigationTheme.colors.primary}/>*/}
      {/*   )*/}
      {/* }}*/}
      {/*/>*/}
      {/*<Drawer.Screen name="Matchups" component={HomeScreen}*/}
      {/*   options={ {*/}
      {/*     drawerIcon: ({ size}) => (*/}
      {/*       <MaterialCommunityIcons name="kabaddi" size={size} color={navigationTheme.colors.primary}/>*/}
      {/*     )*/}
      {/*   }}*/}
      {/*/>*/}
      {/*<Drawer.Screen name="Match Data" component={HomeScreen}*/}
      {/*   options={ {*/}
      {/*     drawerIcon: ({ size}) => (*/}
      {/*       <MaterialIcons name="timeline" size={size} color={navigationTheme.colors.primary}/>*/}
      {/*     )*/}
      {/*   }}*/}
      {/*/>*/}
      {/*<Drawer.Screen name="Logout" component={HomeScreen}*/}
      {/*   options={ {*/}
      {/*     drawerIcon: ({ size}) => (*/}
      {/*       <MaterialCommunityIcons name="logout-variant" size={size} color={navigationTheme.colors.primary}/>*/}
      {/*     )*/}
      {/*   }}*/}
      {/*/>*/}
    </Drawer.Navigator>
  );
}

export default withTheme(AppStack)
