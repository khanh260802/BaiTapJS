import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen_1 from './screens/Screen_1';
import Screen_2 from './screens/Screen_2';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Screen_1/> */}
      <Screen_2/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
