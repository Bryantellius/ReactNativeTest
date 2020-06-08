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
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Home';
import Profile from './Profile';
import styles from './Styles';

const Stack = createStackNavigator();

export const App: React.FC<IAppProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: styles.headerStyle,
          headerTintColor: styles.headerTintColor.color,
          headerTitleStyle: styles.headerTitleStyle,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Strider'}}></Stack.Screen>
        <Stack.Screen
          name="Profile"
          component={Profile}
          initialParams={{
            user: 'John Doe',
            age: 21,
            city: 'Montgomery',
          }}
          options={({route}: any) => ({
            title: route.params?.user,
          })}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

interface IAppProps {}

export default App;
