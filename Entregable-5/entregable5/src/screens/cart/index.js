import React from 'react'
import { View, Text, FlatList } from 'react-native'
import CartItem from '../../components/cart-item'
import { cart } from '../../constants/data/cart'
import { styles } from './styles'

const Cart = ({navigation}) => {
  const total = 200;

  const onDelete = (id) => {
    console.warn(id)
  }

  const renderItem = ({item}) => {
    <CartItem item = {item} onDelete = {onDelete}/> 
  }
  return (
    <View style = {styles.container}>
        <View style = {styles.containerlist}>
          <FlatList 
          data = {cart}
          renderItem = {CartItem}
          style = {styles.containerList}
          />
        </View>
        <View style = {styles.footer}>
            <TouchableOpacity
              style = {styles.buttonConfirm}
              onPress = {() => null}
            />
        </View>
    </View>
  )
}

export default Cart
