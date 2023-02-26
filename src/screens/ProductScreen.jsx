import { StyleSheet, Text, View,Image,FlatList,Pressable } from 'react-native';
import React from 'react'
import products from '../data/products'

const ProductScreen = ({navigation}) => {
  return (
    
       <FlatList  
      data={products}
      renderItem={({item})=>(
        <Pressable onPress={()=>navigation.navigate('Product Details')} style={styles.itemContainer}>
            <Image source={{uri:item.image }} style={styles.image}/>
        </Pressable>
      )}
      numColumns={2}
      />
  
  )
}

export default ProductScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      width:'100%',
      aspectRatio:1,
      borderRadius:20
    },
    itemContainer:{
      width:'50%',
      padding:5,
     
    }
  });
  