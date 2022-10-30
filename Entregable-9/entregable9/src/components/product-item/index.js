import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

const ProductItem = ({item, onSelected}) => {
  return (
    <View style = {styles.container}>
        <TouchableOpacity
          onPress={ () => onSelected(item)}>
            <Text style = {styles.title}> {item.title} </Text>
            <Text style = {styles.subtitle}> {item.weight} | ${item.price}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ProductItem