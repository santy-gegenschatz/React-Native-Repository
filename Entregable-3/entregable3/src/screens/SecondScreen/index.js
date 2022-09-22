import React from 'react'
import Header from '../../components/Header'
import { View, Text } from 'react-native'
import { styles } from './styles'

const SecondScreen = () => {
  return (
    <>    
        <Header title = 'SECOND SCREEN HEADER'/>
        <View style = {styles.secondScreen__view}>
            <Text style = {styles.secondScreen__text}> This is the Second Screen of the App </Text>
        </View>
    </>
  )
}

export default SecondScreen
