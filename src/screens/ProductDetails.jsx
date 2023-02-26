import { View,StyleSheet, Text, Image, FlatList,Pressable, useWindowDimensions,ScrollView } from "react-native";
import React from "react";
import products from "../data/products";

const ProductDetails = () => {
  const product = products[1];
  const { width } = useWindowDimensions();
  const addToCart  =()=>{
    console.log('Add to cart');
  }
  
  return (
    <View>
      <ScrollView >
      {/* Image Carousel */}
      <FlatList
        data={product.images}
        renderItem={({item}) => (
          <Image
            source={{ uri: item}}
            style={{ width: width, aspectRatio: 1 }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <View style={{padding:20}}>
        {/* Title */}
        <Text style={styles.title}>{product.name}</Text>

        {/* price */}
        <Text style={styles.price}>${product.price}</Text>

        {/* description */}
        <Text style={styles.description}>{product.description}</Text>
      </View>
      </ScrollView>

      {/* Add ti cart Button  */}
          <Pressable style={styles.button} onPress={addToCart}>
            <Text style={styles.buttonText}>Add to cart</Text>
          </Pressable>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing:1.5
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
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
