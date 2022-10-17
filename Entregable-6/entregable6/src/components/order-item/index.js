import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

const OrderItem = ({order}) => {
    const refactoredDate = order.date.toString()
  return (
    <View style = {styles.container}>
            <Text style = {styles.title}> Order </Text>
            <Text style = {styles.subtitle}> Total: {order.total} </Text>
            <Text style = {styles.subtitle}> Date: {refactoredDate} </Text>
    </View>
  )
}

export default OrderItem
