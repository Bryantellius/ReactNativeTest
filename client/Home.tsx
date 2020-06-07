import React from 'react';
import {View, Text} from 'react-native';
import styles from './Styles';

export const HomeScreen: React.FC<IHomeProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Page</Text>
    </View>
  );
};

interface IHomeProps {}

export default HomeScreen;
