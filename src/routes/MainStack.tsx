import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {theme} from '../global/styles/theme';

import {Home} from '../screens/home';
import {Drink} from '../screens/drink';
import {Search} from '../screens/search';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: theme.colors.secondary100},
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Drink" component={Drink} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}
