import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../Styles';

export const Feed = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feed Page</Text>
      <Button
        onPress={() => navigation.navigate('Profile')}
        title="Open Modal"
      />
    </View>
  );
};

interface IFeedProps {}

export default Feed;
