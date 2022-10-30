import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles'

const CartItem = ({item, onDelete}) => {
  return (
    <View style = {styles.container}> 
      <View style = {styles.headerContainer}>
        <Text style = {styles.title}> {item.title} </Text>
      </View>
      <View style = {styles.contentContainer}>
        <View>
          <Text> Quantity: {item.quantity} </Text>
          <Text> Price {item.price} </Text>
        </View>
        <TouchableOpacity
          onPress = {() => onDelete(item.id)}>
          <Ionicons name = 'trash' size = {22} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartItem