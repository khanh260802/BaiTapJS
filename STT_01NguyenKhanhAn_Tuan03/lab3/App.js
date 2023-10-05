import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './screens/FirstScreen';
import A from './screens/A';
import B from './screens/B';
import C from './screens/C';
import E from './screens/E';
import D from './screens/D';
import A2 from './screens/A2';
import XMEye from './screens/XMEye';

export default function App() {
  console.log(FirstScreen)
  return (
    <View style={styles.container}>
      
      {/* <FirstScreen /> */}
      {/* <A /> */}
      {/* <B /> */}
      {/* <C /> */}
      {/* <D /> */}
      {/* <E /> */}
      {/* <A2 /> */}
      <XMEye />
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
