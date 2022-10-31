import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'


const ProductImage = ({url}) => {
  console.log(url);
  return (
  <View style = {styles.container}>
    {url ? 
    <Image 
      source = {{uri: 'https://images.urbndata.com/is/image/Anthropologie/993434_021_b'}} 
      style = {styles.image}
    />
    :
    <Text style = {styles.text}> Image not Found </Text>
    }
  </View>
  )
}

export default ProductImage
