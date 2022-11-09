import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { colors } from '../../constants/colors'
import { styles } from './styles'

const Maps = ({navigation}) => {
    const [selectedLocation, setSelectedLocation] = useState(null)

    const initialRegion = {
        latitude: 40.7484,
        longitude: -73.985,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    
    const onSetLocationViaMarker = (event) => {
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude
        })
    }

    const onSaveLocationAndGoBack = () => {
        navigation.navigate('Payment', {mapLocation: selectedLocation})
    }
  return (
    <View style = {styles.container}>
        <Text style = {styles.title}> Set your address on the map </Text>
        <MapView initialRegion = {initialRegion} style = {styles.mapContainer} onPress = {onSetLocationViaMarker}>
            {selectedLocation && 
                (
                    <Marker 
                        title = 'My Address'
                        coordinate = {{
                            latitude: selectedLocation.lat,
                            longitude: selectedLocation.lng
                        }}
                    />
                )
            }
        </MapView>

        <TouchableOpacity
            style = {styles.confirmButton}
            onPress = {onSaveLocationAndGoBack}
        >
            <Text> Confirm Address </Text>
        </TouchableOpacity>
    </View>
  )
}

export default Maps
