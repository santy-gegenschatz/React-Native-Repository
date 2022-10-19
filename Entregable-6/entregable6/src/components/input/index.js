import React from 'react'
import { View, Text, TextInput} from 'react-native'
import Label from '../label/index.js'
import { styles } from './styles'

const Input = ({
    editable,
    children,
    value,
    onChangeText,
    onFocus,
    onBlur,
    maxLength,
    placeholder,
    placeholderTextColor,
    keyboardType,
    ...props
}) => {
    return (
        <View style = {styles.container}>
            <Label {...props}>
                <TextInput 
                {...props}
                style = {styles.input}
                editable = {editable}
                value = {value}
                onChangeText = {onChangeText}
                onFocus = {onFocus}
                maxLength = {maxLength}
                placeholder = {placeholder}
                placeholderTextColor = {placeholderTextColor}
                keyboardType = {keyboardType}
                />
            </Label>
        </View>
    )
}

export default Input