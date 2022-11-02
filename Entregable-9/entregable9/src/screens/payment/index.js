import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { confirmCart } from '../../store/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './styles'

const Payment = ({navigation}) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.items)
    const total = useSelector(state => state.cart.total)
    const userId = useSelector(state => state.auth.userId)
    const onConfirm = () => {
        dispatch(confirmCart(items, total, userId))
        navigation.navigate('OrdersTab')
    }

  return (
    <View style = {styles.container}>
        
        <View style = {styles.orderDetailsView}>
            <Text> {total} </Text>
        </View>
        
        <View>
            <Text style = {styles.confirmText}> Confirm ?</Text>
        </View>
        
        <View style = {styles.buttonsView}>
            <TouchableOpacity style = {styles.negativeButton} >
                <Text> No </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.positiveButton} 
                onPress = {onConfirm}
            >
                <Text> Yes </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Payment
