import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/Redux Store';
import { StripeProvider } from '@stripe/stripe-react-native';

const STRIPE_KEY='pk_test_51Mmy8ICMK9tGvZA1I5JO1xqOxdEv5jXj2sqExtLcL7dIpFZTH3PyDt9Wvbnmv0lq65Q7FItjRd53E2Q9no7KZiSi00j9IHuGLq'
export default function App() {
  return (
    <Provider store={store}>
      <StripeProvider publishableKey={STRIPE_KEY}>
    <View style={styles.container}>
    <Navigation />
      <StatusBar style="auto" />
    </View>
    </StripeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
