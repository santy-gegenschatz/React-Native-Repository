import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Button, TextInput, KeyboardAvoidingView} from 'react-native'
import { colors } from '../../constants/colors.js'
import { styles } from './styles.js'

const Auth = ({navigation}) => {
    const [isLogin, setIsLogin] = useState(true)

    const title = isLogin ? 'Login' : 'Register'
    const message = isLogin ? 'Dont have an account yet ?' : 'Already have an account ?'
    const messageAction = isLogin? 'Sign in' : 'Sign up'
    const messageTarget = isLogin ? 'Sign up' :'Log in'

    const onHandleChangeScreen = () => {
        setIsLogin(!isLogin)
    }

    return (
        <KeyboardAvoidingView style = {styles.containerKeyboard} behavior = 'padding'>
            <View style = {styles.container} >
                    <Text style = {styles.title} > {title}</Text>

                    <Text style = {styles.label} > Email </Text>
                    <TextInput 
                        style = {styles.input}
                        placeholder = 'Enter your email'    
                        placeholderTextColor = {colors.grey} 
                        keyboardType = 'email-address'
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                        onChange = {(text) => console.log(text)}
                    />

                    <Text style = {styles.password} > Password </Text>
                    <TextInput 
                        style = {styles.input}
                        placeholder = 'Enter your password'
                        placeholderTextColor = {colors.grey} 
                        secureTextEntry = {true}
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                        onChange = {(text) => console.log(text)}
                    />

                    <Button 
                        title = {messageAction}
                        color = {colors.green}
                        onPress = {() => console.log('press')}
                        />
                    
                    <View style = {styles.prompt}>
                        <Text style = {styles.promptMessage}> {message} </Text>
                        <TouchableOpacity
                            onPress = {onHandleChangeScreen}
                            style = {styles.promptAction}>
                                <Text style = {styles.promptText}> {messageTarget} </Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Auth