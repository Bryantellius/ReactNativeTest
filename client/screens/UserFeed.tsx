import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../Styles';

export const UserFeed = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>User Feed Page</Text>
    </View>
  );
};

interface IUserFeedProps {}

export default UserFeed;