import React, { useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { useSelector, useDispatch} from 'react-redux' 
import { getOrders } from '../../store/actions/index'
import OrderItem from '../../components/order-item'

const Orders = ({navigation}) => {

  const dispatch = useDispatch()
  const orders = useSelector( (state) => state.orders.list)
  console.log(orders);

  const renderItem = ({item}) => <OrderItem order = {item} onCancel = {onCancel}/>
  
  const onCancel = (id) => {
    console.warn(id);
  }

  useEffect( () => {
    dispatch(getOrders())
  }, [])
  
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
