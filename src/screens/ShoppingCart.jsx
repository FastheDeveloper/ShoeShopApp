import { View, Text, FlatList, StyleSheet,Pressable, TouchableOpacity, ActivityIndicator,Alert } from "react-native";
import React from "react";
import CartListItem from "../components/CartListItem";
import cart from "../data/cart";
import { useDispatch, useSelector } from "react-redux";
import { selectDeliveryPrice, selectSubtotal,selectTotal,cartStore }from "../Redux Store/cartStore.";
import {useCreateOrderMutation,useCreatePaymentIntentMutation}from '../Redux Store/apiStore'
import { useStripe } from "@stripe/stripe-react-native";

const ShoppingTotal =() => {
  const subTotal=useSelector(selectSubtotal);
  const delivery=useSelector(selectDeliveryPrice)
  const total=useSelector(selectTotal)
return(

    <View style={styles.totalContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>${subTotal}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>${delivery}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>${total}</Text>
      </View>
    </View>
  )
}

const ShoppingCart = ({navigation}) => {
  const cartItems=useSelector((state)=>state.cart.items)
  const [createOrder,{data,error,isLoading}]=useCreateOrderMutation();
  const [createPaymentIntent]=useCreatePaymentIntentMutation();
  const {initPaymentSheet,presentPaymentSheet}=useStripe();
  const subTotal=useSelector(selectSubtotal);
  const delivery=useSelector(selectDeliveryPrice)
  const total=useSelector(selectTotal)
  const dispatch=useDispatch()

  // console.log(error,isLoading)
 
  const onCheckout = async () => {
    // 1. Create a payment intent
   const response=await createPaymentIntent({amount:Math.floor(total*100)})
   if(response.error){
    Alert.alert('Something went wrong, try again');
    return;
   }
    // 2. Initialize the Payment sheet
    const initResponse=await initPaymentSheet({
      merchantDisplayName:'FastheCreator',
      paymentIntentClientSecret:response.data.paymentIntent,
      // defaultBillingDetails:{ name:'',address:''}

    })
    if(initResponse.error){
      console.log(initResponse.error)
      Alert.alert('Something went wrong, try again');
      return;
    }
    
    // 3. Present the Payment Sheet from Stripe
    const paymentResponse=await presentPaymentSheet();
    if(paymentResponse.error){
      Alert.alert(`Error code: ${paymentResponse.error.code}`, paymentResponse.error.message);
      return;
    }
    
    // 4. If payment ok -> create the order
    onCreateOrder();
  };

 const onCreateOrder=async ()=>{
  const result = await createOrder({
    items:cartItems,
    subTotal,
    delivery,
    total,
    customer:{
      name:'Farouq',
      address:'Lagos',
      email:'seriki1farou@gmail.com'
    }
  })
  if(result.data?.status==='OK'){
    Alert.alert(
      'Order has been submitted',
      `your order reference is: ${result.data.data.ref}`
    );
      dispatch(cartStore.actions.clear())
  }
 }
  if (cartItems.length === 0) {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Text style={{fontSize:25,fontWeight:'600'}}>
           Click to Start Shopping
          </Text>
          </TouchableOpacity>
      </View>
    )
  }

  return (
    <>
    
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingTotal}
      />
      <TouchableOpacity onPress={onCheckout} style={styles.button} >
        <Text style={styles.buttonText}>
          
          Checkout
          {isLoading&&<ActivityIndicator/>}
          </Text>
      </TouchableOpacity>
    </>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "grey",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "800",
  },
  button:{
    position:'absolute',
    backgroundColor:'black',
    bottom:40,
    width:'80%',
    alignSelf:'center',
    padding:15,
    borderRadius:100,
    alignItems:'center'

  },
  buttonText:{
color:'white',
fontWeight:'700',
fontSize:16
  }
});
