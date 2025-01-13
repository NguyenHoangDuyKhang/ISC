import React from 'react';
import {View, Image, StyleSheet, Text } from 'react-native';

const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <Image
          source={{uri: 'https://i.pinimg.com/736x/b7/99/2d/b7992d77229cdc6d9cf858f77e49fbcb.jpg'}}
          style={styles.logo}
        />
        <Text style={styles.headerText}>Đây là Header</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        width: 90,
        height: 50,
      },
      headerText: {
        fontSize: 18,
        color: 'black',
      },
});

export default Header;
