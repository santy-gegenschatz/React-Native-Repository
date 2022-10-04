import React from 'react'
import { View, TouchableOpacity, FlatList, Text } from 'react-native'
import CartItem from '../../components/cart-item'
import { cart } from '../../constants/data/cart'
import { styles } from './styles'

const Cart = ({navigation}) => {
  const total = 200;

  const onDelete = (id) => {
    console.warn(id)
  }

  const renderItem = ({item}) => {
    return (
      <CartItem item = {item} onDelete = {onDelete}/> 
    )
  }
  return (
    <View style = {styles.container}>
        <View style = {styles.containerList}>
          <FlatList 
          data = {cart}
          renderItem = {renderItem}
          style = {styles.containerList}
          />
        </View>
        <View style = {styles.footer}>
            <TouchableOpacity
              style = {styles.buttonConfirm}
              onPress = {() => null}
            />
            <Text> Hellow WOrld </Text>
        </View>
    </View>
  )
}

export default Cart
