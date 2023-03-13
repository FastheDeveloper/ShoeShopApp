import { StyleSheet, Text, View,TextInput,ActivityIndicator } from 'react-native'
import React ,{useState}from 'react'
import { useGetOrderQuery } from '../Redux Store/apiStore'

const TrackOrder = () => {
    const [ref, setRef] = useState('');
    const {data,isLoading,error}=useGetOrderQuery(ref);
  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        value={ref}
        onChangeText={setRef}
        placeholder="Your order reference"
      />
      {isLoading && <ActivityIndicator />}
      {data?.status !== 'OK' && <Text>Order not found</Text>}
      {data?.status === 'OK' && <Text>Order: {JSON.stringify(data.data,null,2)}</Text>}
    </View>
  )
}

export default TrackOrder

const styles = StyleSheet.create({
    root: {
        padding: 10,
      },
      input: {
        borderColor: 'lightgrey',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
      },
    
})