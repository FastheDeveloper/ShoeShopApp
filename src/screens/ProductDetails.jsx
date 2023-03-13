import { View,StyleSheet, Text, Image, FlatList,TouchableOpacity,Pressable, useWindowDimensions,ScrollView,Alert, Modal, ActivityIndicator } from "react-native";
import React, { useState } from "react";
// import products from "../data/products";
import {useSelector,useDispatch} from 'react-redux'
import { cartStore } from "../Redux Store/cartStore.";
import{useGetProductQuery}from '../Redux Store/apiStore'

const ProductDetails = ({route}) => {
  const id=route.params.id;
  const {data,isLoading,error}=useGetProductQuery(id);
  // const product = useSelector((state)=>state.products.selectedProduct)
  const dispatch=useDispatch();
  const { width } = useWindowDimensions();
  const [mod,setMod]=useState(false);


  const addToCart  =()=>{
    dispatch(cartStore.actions.addCartItem({product:product}))
    // navigation.navigate('Cart')
    Alert.alert('Added to cart')
  setMod(true)

  }

 
  

if(isLoading){
  return <ActivityIndicator />
}
if (error){
  return <Text>Rooe fetchinf</Text>
}
const product=data.data
  return (
    <View>
      <ScrollView >
    {/* <Modal visible={mod} style={{flex:1,}}>
      <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
      <View style={{borderWidth:3,width:'65%',aspectRatio:1}}>
        <View style={{justifyContent:'center',flexDirection:'row',alignItems:'center',marginTop:90}}>
        <Text style={{fontSize:25,textAlign:'center'}}> Item added succesfully</Text>
        </View>
      <View style={{marginHorizontal:15,marginTop:40,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <TouchableOpacity style={{backgroundColor:'#fff3',padding:5,borderRadius:15}} onPress={()=>setMod(false)}>
          <Text>Okay</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:'#fff3',padding:5,borderRadius:15}} onPress={()=>navigation.navigate('Cart')}>
          <Text>Open addCartItem</Text>
        </TouchableOpacity>
      </View>
      </View>
      </View>
    </Modal> */}

      {/* Image Carousel */}
      <FlatList
        data={product.images}
        renderItem={({item}) => (
          <Image
            source={{ uri: item}}
            style={{ width, aspectRatio: 1 }}
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
