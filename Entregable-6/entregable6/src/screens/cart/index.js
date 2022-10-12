import React from 'react'
import { View, TouchableOpacity, FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { styles } from './styles'
import CartItem from '../../components/cart-item'

const Cart = ({navigation}) => {
  const items = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)

  const onDelete = (id) => {
    console.warn(id)
  }

  const renderItem = ({item}) => {
    return (
      <CartItem item = {item} onDelete = {onDelete}/> 
    )
  }

  const goToPayment = () => {
    navigation.navigate('Payment')
  }

  return (
    <View style = {styles.container}>
        <View style = {styles.containerList}>
          <FlatList 
          data = {items}
          renderItem = {renderItem}
          style = {styles.containerList}
          />
        </View>
        <View style = {styles.footer}>
            <TouchableOpacity 
              style = {styles.buttonConfirm}
              onPress = {goToPayment}
            >
              <View style = {styles.footerView}>
                <Text style = {styles.footerTitle}> Total value of the Order </Text>
                <Text style = {styles.footerTitle}> ${total} </Text>
              </View>
            </ TouchableOpacity>
        </View>
    </View>
  )
}

export default Cart
