import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'


const ProductImage = ({url}) => {
  return (
  <View style = {styles.container}>
    {url ? 
    <Image 
      source = {{uri: url}} 
      style = {styles.image}
    />
    :
    <Text style = {styles.text}> Image not Found </Text>
    }
  </View>
  )
}

export default ProductImage
