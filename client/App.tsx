/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Feed from './screens/Feed';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

export const App: React.FC<IAppProps> = ({navigation}: any) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarIcon: ({focused, color, size}) => <Icon name="home" size={30} />,
        }}>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

interface IAppProps {}

export default App;
