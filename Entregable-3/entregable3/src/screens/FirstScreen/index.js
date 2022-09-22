import React from 'react'
import Header from '../../components/Header/index.js'
import { styles } from './styles'
import { View, Text } from 'react-native'

const FirstScreen = () => {
  return (
    <>
    <Header title = {'FIRST SCREEN HEADER'}/>
    <View style = {styles.firstScreen__view}>
        <Text style = {styles.firstScreen__text}> 
        This is the First Screen of the App.
        Please press the button below to conditionally navigate to the second screen.
         </Text>
    </View>
    </>
  )
}

export default FirstScreen
