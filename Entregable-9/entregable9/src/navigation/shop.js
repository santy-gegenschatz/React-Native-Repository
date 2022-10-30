import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Categories from '../screens/categories'
import Product from '../screens/product'
import Products from '../screens/products'

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
  return (
    <Stack.Navigator initialRouteName = 'Products'>
        <Stack.Screen name = 'Product' component = {Product}/> 
        <Stack.Screen name = 'Categories' component = {Categories}/> 
        <Stack.Screen name = 'Products' component = {Products}/> 
    </Stack.Navigator>
  )
}

export default ShopNavigator
