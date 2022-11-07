import React from 'react'
import { View, TouchableOpacity, FlatList, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './styles'
import CartItem from '../../components/cart-item'
import { EmptyScreenComponent } from '../../components/index'
import { confirmCart, removeItem } from '../../store/actions/'

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
    navigation.navigate('Payment')
  }

  return (
    <View style = {styles.container}>
      {items.length !== 0?
        <View style = {styles.fullCartContainer}>
          <View style = {styles.listContainer}>
            <FlatList 
            data = {items}
            renderItem = {renderItem}
            style = {styles.listContainer}
            keyExtractor = {item => item.id.toString()}
            />
          </View>
            <TouchableOpacity 
              style = {items.length === 0 ? styles.disabledButtonConfirm :styles.buttonConfirm}
              onPress = {goToPayment}
              disabled = {items.length === 0}
            >
              <View style = {styles.buttonConfirmView}>
                <Text style = {styles.buttonConfirmTitle}> Total value of the Order </Text>
                <Text style = {styles.buttonConfirmTitle}> ${total} </Text>
              </View>
            </ TouchableOpacity>
        </View>
      :
        <View style = {styles.emptyCartContainer}>
          <EmptyScreenComponent navigation = {navigation} message = 'It seems your cart is empty. Why don`t you go to the store and checkout our awesome products?' tabname = {'ShopTab'}/>
        </View>
      }
    </View>
  )
}

export default Cart
