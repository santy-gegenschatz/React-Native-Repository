import React, { useEffect } from 'react'
import { useState } from 'react'
import { confirmCart } from '../../store/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { EmptyScreenComponent, LocationSelector } from '../../components/index'
import { translateCoordsToAddress } from '../../utils/maps'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './styles'
import { useIsFocused } from '@react-navigation/native'

const Payment = ( {navigation} ) => {
    const dispatch = useDispatch()
    const isFocused = useIsFocused()
    const items = useSelector(state => state.cart.items)
    const total = useSelector(state => state.cart.total)
    const userId = useSelector(state => state.auth.userId)
    const [location, setLocation] = useState(null)

    const onConfirm = async () => {
        // Here you should add the location as a parameter
        console.log();
        const address = await translateCoordsToAddress(location.lat, location.lng)
        const fakeAddress = address || 'Fake Street 124'
        dispatch(confirmCart(items, total, userId, fakeAddress))
        navigation.navigate('OrdersTab')
    }

    const onHandleCancel = () => {
        navigation.navigate('Cart')
    }

    const onHandleLocationSearch = (location) => {
        setLocation(location)
    }

    useEffect( () => {
        if (items.length === 0) {
            onHandleCancel()
        }
    }, [isFocused])

  return (
    <>
        {items.length !== 0 ?
            <ScrollView style = {styles.container}>
                    <Text style = {styles.title}> Please confirm your order and enter the receiving address</Text>
                    <View style = {styles.orderTotalContainer}>
                        <Text style = {styles.orderText}> Order Total </Text>
                        <Text style = {styles.totalText}> {total} USD </Text>
                    </View>
                    <View style = {styles.locationSelectorContainer}>
                        <LocationSelector onLocation = {onHandleLocationSearch}/>
                    </View>
                    <View style = {styles.buttonsContainer}>
                        <TouchableOpacity style = {location ? styles.positiveButton : styles.positiveButtonDisabled} onPress = {onConfirm} disabled = {location ? false : true}>
                            <Text> Confirm Order </Text>
                        </TouchableOpacity>
        
                        <TouchableOpacity style = {styles.negativeButton} onPress = {onHandleCancel}>
                            <Text> Cancel </Text>
                        </TouchableOpacity>
                    </View>
            </ScrollView>
        :
        <>
        </>
    }
    </>
  )
}

export default Payment
