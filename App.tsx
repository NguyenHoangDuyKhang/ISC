import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/component/stack/RootStack';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'; // Kiểm tra chế độ sáng/tối
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter, // Thay đổi màu nền tùy thuộc vào chế độ
  };

  return (
    <NavigationContainer>
      {/* Thay đổi màu nền của StatusBar tùy thuộc vào chế độ sáng/tối */}
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <SafeAreaView style={[styles.container, backgroundStyle]}>
        <RootStack />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
