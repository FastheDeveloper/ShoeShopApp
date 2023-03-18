import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/Redux Store';
import { StripeProvider } from '@stripe/stripe-react-native';

const STRIPE_KEY='STRIPE_PUBLISHABLE_KEY'
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
