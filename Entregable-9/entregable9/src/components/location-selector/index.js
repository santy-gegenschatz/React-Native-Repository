import React, { useState } from 'react'
import * as Location from 'expo-location'
import { View, Text, Button, TextInput, TouchableOpacity, Alert} from 'react-native'
import { styles } from './styles'


const LocationSelector = ({onLocation}) => {
    const [pickedLocation, setPickedLocation] = useState(null)

    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync() 
        if (status !== 'granted') {
            Alert.alert('you need to grant permissions to use this app')
            return false
        }
        return true
    }

    const onHandlerLocation = async () => {
        const hasPermission = await verifyPermissions()
        if (!hasPermission) {
            return 
        }
        try {
            const location = await Location.getCurrentPositionAsync({
                timeout: 5000
            })
            
            setPickedLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })

            onLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })

        } catch (e) {
            console.log(e);
        }

    }
  return (
    <View style = {styles.container}>
        <Text> Location Selector Component </Text>
        <TouchableOpacity
            style = {styles.button}
            onPress ={onHandlerLocation}
        >
            <Text> Send to my current location </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style = {styles.button}
            onPress ={ onLocation}
        >
            <Text> Select location in map </Text>
        </TouchableOpacity>

        {/* <View style = {styles.inputContainer}>
            <TextInput style = {styles.input} />
            <Button 
                title = 'Search'
                onPress = {onLocation}
            />
        </View> */}
        <View style = {styles.mapContainer}>
            {pickedLocation ?
            <Text> Picked Location: {pickedLocation.lat}, {pickedLocation.lng} </Text>
            :
            <Text> No location set yet </Text>
            }
        </View>
    </View>
    
  )
}

export default LocationSelector
