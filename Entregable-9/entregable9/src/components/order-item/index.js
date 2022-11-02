import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles'
import { colors } from '../../constants/colors';

const OrderItem = ({order, onCancel}) => {
  return (
    <View style = {styles.container}>
      <View style = {styles.headerContainer}>
          <Text style = {styles.title}> Order </Text>
          <Text style = {styles.dateText}> {order.date} </Text>
      </View>
      <View style = {styles.infoContainer}>
          <Text> {order.id} </Text>
          <Text style = {styles.subtitle}> Total: {order.total} USD </Text>
          <TouchableOpacity
          onPress = {() => onCancel(order.id)}>
            <Ionicons name = 'trash' color = {colors.black} size = {22} />
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderItem
