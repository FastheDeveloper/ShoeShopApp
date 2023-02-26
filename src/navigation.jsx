import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import ProductDetails from "./screens/ProductDetails";
import ProductScreen from "./screens/ProductScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "./Redux Store/cartStore.";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const numberOfItems=useSelector(selectNumberOfItems);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:'white'}}}>
        <Stack.Screen
          name="Home"
          component={ProductScreen}
          options={({navigation})=>({
            headerRight: () => (
              <Pressable style={{flexDirection:'row'}} onPress={()=>navigation.navigate('Cart')}>
                <FontAwesome5 name="shopping-cart" size={18} color='gray'/>
                <Text style={{marginLeft:5,fontWeight:'900'}}>{numberOfItems}</Text>
              </Pressable>
            ),
           
          })}
          
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetails}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
