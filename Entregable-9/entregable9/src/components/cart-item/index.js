import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles'
import ProductImage from '../product-image';

const CartItem = ({item, onDelete}) => {
  return (
    <View style = {styles.container}> 
      <View style = {styles.imageContainer}>
        <ProductImage url = {item.url} />
      </View>
      <View style = {styles.contentContainer}>
        <View style = {styles.headerContainer}>
          <Text style = {styles.title}> {item.title} </Text>
        </View>
        <View style = {styles.descriptionContainer}>
          <View>
            <Text> {item.quantity} X {item.price} USD</Text>
          </View>
          <View style = {styles.deleteButtonContainer}>
            <TouchableOpacity
              onPress = {() => onDelete(item.id)}>
              <Ionicons name = 'trash' size = {22} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CartItem