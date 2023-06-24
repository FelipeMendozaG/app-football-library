import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screen/HomeScreen';
import MatchScreen from './src/screen/MatchScreen';

import 'react-native-gesture-handler';
import SeasonScreen from './src/screen/SeasonScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Seasons" options={{headerTitle:'Temporadas UEFCL'}} component={SeasonScreen} />
        <Stack.Screen name="Home" options={{headerTitle: 'Página de inicio'}} component={HomeScreen} />
        <Stack.Screen name="Match" component={MatchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}