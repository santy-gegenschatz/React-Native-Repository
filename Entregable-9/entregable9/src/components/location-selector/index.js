import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Location from 'expo-location'
import { MapPreview } from '../index'
import { View, Text, Button, TextInput, TouchableOpacity, Alert} from 'react-native'
import { styles } from './styles'


const LocationSelector = ({onLocation}) => {
    const navigation = useNavigation()
    const route = useRoute()
    const [pickedLocation, setPickedLocation] = useState(null)
    const mapLocation = route?.params?.mapLocation

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

    const onHandlerPickInMap = () => {
        navigation.navigate('Maps')
    }

    useEffect(() => {
        if (mapLocation) {
            setPickedLocation(mapLocation)
            onLocation(mapLocation)
        }
    }, [mapLocation])

  return (
    <View style = {styles.container}>
        <TouchableOpacity
            style = {styles.button}
            onPress ={onHandlerLocation}
        >
            <Text> Send to my current location </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style = {styles.button}
            onPress ={onHandlerPickInMap}
        >
            <Text> Select location in map </Text>
        </TouchableOpacity>

        <View style = {styles.mapContainer}>
            <MapPreview location = {pickedLocation} />
        </View>
    </View>
    
  )
}

export default LocationSelector
