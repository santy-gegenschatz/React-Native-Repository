import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'

const ProductItem = ({item, onSelected}) => {
  return (
    <View style = {styles.container}>
        <TouchableOpacity
          onPress={ () => onSelected(item)}>
            <View style = {styles.imageContainer}>
              <Image style = {styles.image} source = '../../../assets/product.jpeg'/> 
            </View>
            <View style = {styles.infoContainer}>
              <Text style = {styles.title}> {item.title} </Text>
              <Text style = {styles.subtitle}> {item.weight} | ${item.price}</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default ProductItem