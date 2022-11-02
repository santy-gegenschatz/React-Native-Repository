import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

const Payment = () => {
  return (
    <View style = {styles.container}>
        
        <View style = {styles.orderDetailsView}>
            <Text> Price & Quantity </Text>
        </View>
        
        <View>
            <Text style = {styles.confirmText}> Confirm ?</Text>
        </View>
        
        <View style = {styles.buttonsView}>
            <TouchableOpacity style = {styles.negativeButton} >
                <Text> No </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.positiveButton} >
                <Text> Yes </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Payment
