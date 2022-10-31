import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { ProductImage } from '../../components/index' 
import { styles } from './styles'

const ProductItem = ({item, onSelected}) => {
  return (
    <View style = {styles.container}>
        <TouchableOpacity
          onPress={ () => onSelected(item)}>
            <View style = {styles.imageContainer}>
              <ProductImage url = 'https://images.urbndata.com/is/image/Anthropologie/993434_021_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=640'/>
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