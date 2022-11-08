import React from 'react'
import * as Location from 'expo-location'
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native'
import { confirmCart } from '../../store/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './styles'
import { LocationSelector } from '../../components/index'

const Payment = ( {navigation} ) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.items)
    const total = useSelector(state => state.cart.total)
    const userId = useSelector(state => state.auth.userId)

    const onConfirm = () => {
        dispatch(confirmCart(items, total, userId))
        navigation.navigate('OrdersTab')
    }

    const onHandleCancel = () => {
        navigation.navigate('Cart')
    }

    const onHandleLocationSearch = () => {

    }

  return (
    <View style = {styles.container}>
        <Text style = {styles.title}> Please confirm your order and Enter the receiving address</Text>
        <Text> Order Total </Text>
        <Text> {total} USD </Text>
        <Text> Receiving Address </Text>
        <LocationSelector onLocation = {onHandleLocationSearch}/>
        <View style = {styles.buttonsContainer}>
            <TouchableOpacity style = {styles.positiveButton} onPress = {onConfirm} >
                <Text> Confirm Order </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.negativeButton} onPress = {onHandleCancel}>
                <Text> Cancel </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Payment
