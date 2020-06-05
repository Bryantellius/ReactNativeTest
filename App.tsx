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
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


const App: React.FC<IAppProps> = () => {
  const [sample, setSample] = React.useState<IUser[]>([]);

  React.useEffect(() => {
    (async () => {
      let res = await fetch('https://jsonplaceholder.typicode.com/users');
      let users = await res.json();
      setSample(users);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.heading}>Hello World!</Text>
      <FlatList
        data={sample}
        style={styles.scrollView}
        renderItem={({item}) => (
          <View style={styles.userView} key={item.id}>
            <Text style={styles.users}>{item.name}</Text>
          </View>
        )}></FlatList>
      <Text style={styles.footer}>Boom Town</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 5,
  },
  heading: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#FF7600',
    color: 'white',
    fontSize: 50,
    padding: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 5,
  },
  footer: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#FF7600',
    color: 'white',
    fontSize: 50,
    padding: 5,
    borderTopColor: 'black',
    borderTopWidth: 5,
  },
  users: {
    color: '#222222',
    fontSize: 30,
  },
  userView: {
    marginVertical: 10,
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 1,
    padding: 5,
  },
});

interface IAppProps {}
interface IUser {
  id: number;
  name: string;
}

export default App;
