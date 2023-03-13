import { StyleSheet, Text, View,Image,FlatList,Pressable, ActivityIndicator } from 'react-native';
import React from 'react'
// import products from '../data/products'
import {useSelector,useDispatch} from 'react-redux'
import { productStore } from '../Redux Store/productStore';
import {useGetProductsQuery} from '../Redux Store/apiStore'

const ProductScreen = ({navigation}) => {

  // const products=useSelector((state=>state.products.products))
  const dispatch=useDispatch();

  // const {data,isLoading,error}=  useGetProductsQuery();
  const {isLoading,isFetching,data,error}=useGetProductsQuery()

 if(isLoading){
  return <ActivityIndicator />;
 }
 if(isFetching){
  return <Text>etching</Text>;
 }
 if(error){
  // console.log(error)
  return  <Text>Error fetching</Text>
 }
const products=data.data
  return (
    
       <FlatList  
      data={products}
      renderItem={({item})=>(
        <Pressable onPress={()=>{
          //update selected product
          // dispatch(productStore.actions.setSelectedProduct(item.id))
          navigation.navigate('Product Details',{id:item._id})}} style={styles.itemContainer}>
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
  