import { View, Text, FlatList, StyleSheet,Pressable } from "react-native";
import React from "react";
import CartListItem from "../components/CartListItem";
import cart from "../data/cart";
import { useSelector } from "react-redux";
import { selectDeliveryPrice, selectSubtotal,selectTotal } from "../Redux Store/cartStore.";

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

const ShoppingCart = () => {
  const cartItems=useSelector((state)=>state.cart.items)
  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingTotal}
      />
      <Pressable style={styles.button} >
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
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
