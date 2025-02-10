import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet, BackHandler } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const HomeScreen = ({navigation }) => {
  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);


  const handleLogout = async () => {
    await AsyncStorage.removeItem("user"); // Xóa thông tin đăng nhập
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đây là trang Home</Text>
      <Button title="Logout" onPress={handleLogout} color="red" />
    </View>
  );
};


export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#3498db',
},
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20 ,
}
});