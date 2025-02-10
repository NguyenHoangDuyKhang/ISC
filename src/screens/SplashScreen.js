import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const checkLogin = async () => {
      const user = await AsyncStorage.getItem('user');
      setTimeout(() => {
        navigation.replace(user ? 'Home' : 'Login');
      }, 3000);
    };
    checkLogin();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={styles.logo}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  logo: {width: '400', height: '400'},
});
