import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { getFavourites } from '../../db'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'
import { useState } from 'react'
import { FlatList } from 'react-native'
import ProductItem from '../../components/product-item'
import { useDispatch } from 'react-redux'
import { selectedProduct } from '../../store/actions'

const Favourites = ({navigation}) => {
  const [favourites, setFavourites] = useState([])
  const dispatch = useDispatch()
  const getFavouritesDataFromDB = async () => {
    try {
      const response = await getFavourites()
      const favouritesArray = response.rows._array
      setFavourites(favouritesArray)
    } catch (e) {
      console.log(e);
    }
  } 

  const renderItem= ({item}) => {
    return (
        <ProductItem item = {item} onSelected = {onSelected}/>
    )
  }

  const onSelected = (item) => {
      dispatch(selectedProduct(item.id))
      navigation.navigate('Product')
  }

  useFocusEffect(
    useCallback(() => {
      getFavouritesDataFromDB()
    }, [getFavouritesDataFromDB])
  )
  return (
    <View style = {styles.container}> 
        <Text style = {styles.title}> This is the favourites screen </Text>
        <FlatList
                data = {favourites}
                renderItem = {renderItem}
                keyExtractor = {item => item.id.toString()}
                style = {styles.flatlist}
                >
            </FlatList>
    </View>
  )
}

export default Favourites
