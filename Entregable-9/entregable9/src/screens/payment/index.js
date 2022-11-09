import React from 'react'
import * as Location from 'expo-location'
import { useState } from 'react'
import { confirmCart } from '../../store/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { LocationSelector } from '../../components/index'
import { translateCoordsToAddress } from '../../utils/maps'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './styles'

const Payment = ( {navigation} ) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.items)
    const total = useSelector(state => state.cart.total)
    const userId = useSelector(state => state.auth.userId)
    const [location, setLocation] = useState(null)

    const onConfirm = async () => {
        // Here you should add the location as a parameter
        const address = await translateCoordsToAddress(location.lat, location.lng)
        console.log(address);
        // dispatch(confirmCart(items, total, userId))
        // navigation.navigate('OrdersTab')
    }

    const onHandleCancel = () => {
        navigation.navigate('Cart')
    }

    const onHandleLocationSearch = (location) => {
        setLocation(location)
    }

  return (
    <View style = {styles.container}>
        <Text style = {styles.title}> Please confirm your order and enter the receiving address</Text>
        <Text> Order Total </Text>
        <Text> {total} USD </Text>
        <Text> Receiving Address </Text>
        <LocationSelector onLocation = {onHandleLocationSearch}/>
        <View style = {styles.buttonsContainer}>
            <TouchableOpacity style = {location ? styles.positiveButton : styles.positiveButtonDisabled} onPress = {onConfirm} disabled = {location ? false : true}>
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
