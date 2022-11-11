import React, { useCallback, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { useSelector, useDispatch} from 'react-redux' 
import { deleteOrder, getOrders } from '../../store/actions/index'
import OrderItem from '../../components/order-item'
import { EmptyScreenComponent } from '../../components'
import { useFocusEffect } from '@react-navigation/native'

const Orders = ({navigation}) => {

  const dispatch = useDispatch()
  const orders = useSelector( (state) => state.orders.list)
  const userId = useSelector(state => state.auth.userId)
  console.log('Orders:', orders);
  const renderItem = ({item}) => <OrderItem order = {item} onCancel = {onCancel} />
  
  const onCancel = (id) => {
    dispatch(deleteOrder(id))
  }

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders(userId))
    }, [dispatch])
  )
  
  return (
    <View style = {styles.container}>
      {orders.length !== 0 ? 
        <FlatList 
            data = {orders}
            renderItem = {renderItem}
            keyExtractor = {item => item.id.toString()}
        />
      :
        <EmptyScreenComponent navigation = {navigation} message = 'It seems you have not ordered anything yet. Why don`t you checkout the awesome products of our store ?' tabname={'ShopTab'} />
      }
    </View>
  )
}

export default Orders
