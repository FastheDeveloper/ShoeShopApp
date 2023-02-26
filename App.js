import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/Redux Store';

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
    <Navigation />
      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
