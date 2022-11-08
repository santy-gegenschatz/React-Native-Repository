import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native'
import { confirmCart } from '../../store/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './styles'

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
        <View style = {styles.inputContainer}>
            <TextInput style = {styles.input} />
            <Button 
                title = 'Search'
                onPress = {onHandleLocationSearch}
            />
        </View>
        <View style = {styles.mapContainer}>
            <Text> MapContainer </Text>
        </View>

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
