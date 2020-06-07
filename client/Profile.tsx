import React from 'react';
import {View, Text} from 'react-native';
import styles from './Styles';

export const Profile: React.FC<IProfileProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Page</Text>
    </View>
  );
};

interface IProfileProps {}

export default Profile;
