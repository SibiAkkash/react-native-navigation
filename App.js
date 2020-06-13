import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
/* import Ionicons from 'react-native-vector-icons/Ionicons'; */
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from './src/screens/tab/HomeScreen';
import HelpScreen from './src/screens/tab/HelpScreen';
import AboutScreen from './src/screens/tab/AboutScreen';

import ContactScreen from './src/screens/stack/ContactScreen';
import CopyrightScreen from './src/screens/stack/CopyrightScreen';
import PlaylistScreen from './src/screens/stack/PlaylistScreen';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Tabs = createBottomTabNavigator(
	{
		Home: HomeScreen,
		About: AboutScreen,
		Help: HelpScreen
	}
);

const Stack = createStackNavigator(
	{
		Home: Tabs,
		Contact: ContactScreen,
		Copyright: CopyrightScreen,
		PlayList: PlaylistScreen
	}
);

const Draw = createDrawerNavigator(
	{
		Home: Stack,
		Contact: { screen: ContactScreen },
		Copyright: { screen: CopyrightScreen },
		PlayList: { screen: PlaylistScreen },
	}
);

//export default createAppContainer(Stack);

const AppContainer = createAppContainer(Stack);

export default function App() {
  return (
	<View style={styles.container}>
		<AppContainer />
    </View>
  );
}

