import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { ProductImage } from '../../components/index' 
import { StatusIndicator } from '../../components/index'
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles'
import { colors } from '../../constants/colors';

const ProductItem = ({item, onSelected, favourite, onDelete}) => {
  return (
    <View style = {favourite ? styles.favouriteContainer : styles.container}>
        <TouchableOpacity
          onPress={ () => onSelected(item)}>
            <View style = {styles.imageContainer}>
              <ProductImage url = {item.url} />
            </View>
            <View style = {styles.headerContainer}>
              <Text style = {styles.title}> {item.title} </Text>
              { favourite ?
                <View style = {styles.favouriteDescriptionContainer}> 
                  <View style = {styles.descriptionContainer}>
                    <StatusIndicator text = {item.status}/>
                    <Text style = {styles.priceText}> {item.price} USD</Text>
                  </View>
                  <View> 
                    <TouchableOpacity
                      onPress = {() => onDelete(item.id)}>
                        <Ionicons name = 'trash' color = {colors.black} size = {22} />
                    </TouchableOpacity>
                  </View>
                </View>              
              :
                <View style = {styles.descriptionContainer}>
                  <StatusIndicator text = {item.status}/>
                  <Text style = {styles.priceText}> {item.price} USD</Text>
                </View>
              }
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default ProductItem