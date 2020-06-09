import React from 'react';
import {View, Text} from 'react-native';
import styles from '../Styles';

export const Profile = ({route}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{route.params?.user}'s Profile</Text>
      <Text style={styles.text}>{route.params?.age} yrs old</Text>
      <Text style={styles.text}>Lives in {route.params?.city}</Text>
    </View>
  );
};

interface IProfileProps {}

export default Profile;
