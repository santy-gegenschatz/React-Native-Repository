import React from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { styles } from './styles'

const FirstScreen = () => {
  return (
    <>    
        <Header title = 'First Screen'/>
        <View style = {styles.firstScreen__view}>
            <Text> This is the First Screen of the App </Text>
        </View>
    </>
  )
}

export default FirstScreen
