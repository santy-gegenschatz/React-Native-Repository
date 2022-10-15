import React from 'react'
import { View, TouchableOpacity, FlatList, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './styles'
import CartItem from '../../components/cart-item'
import { confirmCart, removeItem } from '../../store/actions/cart.actions'

const Cart = ({navigation}) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)

  const onDelete = (id) => {
    dispatch(removeItem(id))
  }

  const renderItem = ({item}) => {
    return (
      <CartItem item = {item} onDelete = {onDelete}/> 
    )
  }

  const goToPayment = () => {
    dispatch(confirmCart())
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
              style = {items.length === 0 ? styles.disabledButtonConfirm :styles.buttonConfirm}
              onPress = {goToPayment}
              disabled = {items.length === 0}
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
