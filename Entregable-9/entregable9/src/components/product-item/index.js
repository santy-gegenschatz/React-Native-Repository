import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { ProductImage } from '../../components/index' 
import {StatusIndicator} from '../../components/index'
import { styles } from './styles'

const ProductItem = ({item, onSelected}) => {
  return (
    <View style = {styles.container}>
        <TouchableOpacity
          onPress={ () => onSelected(item)}>
            <View style = {styles.imageContainer}>
              <ProductImage url = {item.url} />
            </View>
            <View style = {styles.headerContainer}>
              <Text style = {styles.title}> {item.title} </Text>
              <View style = {styles.descriptionContainer}>
                <StatusIndicator text = {item.status}/>
                <Text style = {styles.priceText}> {item.price} USD</Text>
              </View>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default ProductItem