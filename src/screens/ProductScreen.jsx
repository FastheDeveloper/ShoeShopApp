import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import React from 'react'
import products from '../data/products'

const ProductScreen = () => {
  return (
    
       <FlatList  
      data={products}
      renderItem={({item})=>(
        <View style={styles.itemContainer}>
            <Image source={{uri:item.image }} style={styles.image}/>
        </View>
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
      aspectRatio:1
    },
    itemContainer:{
      width:'50%',
      padding:5
    }
  });
  