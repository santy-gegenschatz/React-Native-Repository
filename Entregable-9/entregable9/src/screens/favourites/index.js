import React from 'react'
import { View, Button } from 'react-native'
import { styles } from './styles'
import { getFavourites, deleteFavourite } from '../../db'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'
import { useState } from 'react'
import { FlatList } from 'react-native'
import ProductItem from '../../components/product-item'
import { useDispatch } from 'react-redux'
import { selectedProduct } from '../../store/actions'
import { EmptyScreenComponent } from '../../components'

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

  const deleteFavouriteFromDB = async (id) => {
    try {
      const response = await deleteFavourite(id)
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  const renderItem= ({item}) => {
    return (
        <ProductItem item = {item} onSelected = {onSelected} favourite = {true} onDelete = {deleteFavouriteFromDB}/>
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
      {favourites.length !== 0 ?
        <FlatList
          data = {favourites}
          renderItem = {renderItem}
          keyExtractor = {item => item.id.toString()}
          style = {styles.flatlist}
          >
        </FlatList>
      :
      <View style = {styles.alertMessageContainer}>
        <EmptyScreenComponent navigation = {navigation} message = 'It seems you have no favourites yet. Why don`t you checkout the awesome products of our store ?' tabname={'ShopTab'} />
      </ View>
      }
    </View>
  )
}

export default Favourites
