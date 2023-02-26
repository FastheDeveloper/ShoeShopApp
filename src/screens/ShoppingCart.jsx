import { View, Text, FlatList, StyleSheet,Pressable } from "react-native";
import React from "react";
import CartListItem from "../components/CartListItem";
import cart from "../data/cart";
const ShoppingTotal =() => (
    <View style={styles.totalContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>$20,000</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>$100</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>$20,100</Text>
      </View>
    </View>
  )


const ShoppingCart = () => {
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingTotal}
      />
      <Pressable style={styles.button} >
        <Text style={styles.buttonText}>Add to cart</Text>
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
