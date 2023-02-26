import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import ProductDetails from './src/screens/ProductDetails';
import ProductScreen  from './src/screens/ProductScreen';

export default function App() {
  return (
    <View style={styles.container}>
     <ProductDetails />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
