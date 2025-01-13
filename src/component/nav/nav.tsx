import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import Main from '../../pages/layout/main';

type RootStackParamList = {
  Home: undefined;
  'List image': undefined;
  'Product card': undefined;
  'List comment': undefined;
};

const Navigation = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('List image')}>
          <Text style={styles.menuText}>List image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Product card')}>
          <Text style={styles.menuText}>Product card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('List comment')}>
          <Text style={styles.menuText}>List comment</Text>
        </TouchableOpacity>
      </View>

      <Main />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#36f5ff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  menuItem: {
    padding: 10,
  },
  menuText: {
    fontSize: 16,
    color: 'black',
  },
});

export default Navigation;
