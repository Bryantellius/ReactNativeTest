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
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import styles from './Styles';
import Feed from './screens/Feed';
import UserFeed from './screens/UserFeed';

const Stack = createStackNavigator();

export const App: React.FC<IAppProps> = ({navigation}: any) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Feed"
        screenOptions={{
          headerStyle: styles.headerStyle,
          headerTintColor: styles.headerTintColor.color,
          headerTitleStyle: styles.headerTitleStyle,
        }}>
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="You" component={UserFeed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

interface IAppProps {}

export default App;
