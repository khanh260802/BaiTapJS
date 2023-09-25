import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.part1}> hello world </Text>
      <Text style={styles.part2}> hello world </Text>
      <Text style={styles.part3}> hello world </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  part1: {
    flex: 1,
    backgroundColor: 'blue',
  },
  part2: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  part3: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
