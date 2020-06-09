import React from 'react';
import {View, Button} from 'react-native';
import styles from '../Styles';

export const Header = ({navigation}: any) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 10,
      }}>
      <Button
        color={styles.button.backgroundColor}
        title="Add"
        onPress={() => navigation.navigate('Add')}
      />
    </View>
  );
};

interface IHeaderProps {}

export default Header;
