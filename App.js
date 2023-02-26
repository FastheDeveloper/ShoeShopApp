import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import ProductDetails from './src/screens/ProductDetails';
import ProductScreen  from './src/screens/ProductScreen';
import ShoppingCart from './src/screens/ShoppingCart';

export default function App() {
  return (
    <View style={styles.container}>
     <ShoppingCart />
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
