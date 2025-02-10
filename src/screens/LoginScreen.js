import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  BackHandler,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  const handleLogin = async () => {
    if (username === 'test' && password === 'test') {
      await AsyncStorage.setItem('user', 'loggedIn');
      navigation.replace('Home');
    } else {
      Alert.alert('Lỗi', 'Tên đăng nhập hoặc mật khẩu sai');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <Text>Password:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 20},
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
});
