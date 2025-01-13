import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';

const Main = () => {
  return (
    <View style={styles.main}>
      <Header />
      <View style={styles.mainContent}>
        <View style={styles.leftColumn}>
          <Text style={styles.text}> 30% </Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.text}> 70% </Text>
        </View>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flex: 1,
  },
  mainContent: {
    flex: 1,
    flexDirection: 'row',
  },
  leftColumn: {
    flex: 3,
    backgroundColor: '#f50505',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightColumn: {
    flex: 7,
    backgroundColor: '#2f6ae0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});

export default Main;
