import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';


/**
 * Expo entry defaults to ./App.js, so we use 
 * registerRootComponent to register this component
 * as the entry point. In addition, the entryPoint 
 * property in app.json must match to this file path.
 */
registerRootComponent(App)


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
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
