import React, { useCallback, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { useSelector, useDispatch} from 'react-redux' 
import { deleteOrder, getOrders } from '../../store/actions/index'
import OrderItem from '../../components/order-item'
import { useFocusEffect } from '@react-navigation/native'

const Orders = ({navigation}) => {

  const dispatch = useDispatch()
  const orders = useSelector( (state) => state.orders.list)

  const renderItem = ({item}) => <OrderItem order = {item} onCancel = {onCancel}/>
  
  const onCancel = (id) => {
    dispatch(deleteOrder(id))
  }

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders())
    }, [dispatch])
  )
  
  return (
    <View style = {styles.container}>
        <FlatList 
            data = {orders}
            renderItem = {renderItem}
            keyExtractor = {item => item.id.toString()}
        />
    </View>
  )
}

export default Orders
