import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './Styles';

export const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Page</Text>
      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.navigate('Profile', {
            user: 'Ben Bryant',
            age: 22,
            city: 'Birmingham',
          })
        }
      />
    </View>
  );
};

interface IHomeProps {}

export default HomeScreen;
