import React from "react";
import { URL_MAPS } from '../../utils/maps' 
import { View, Text, Image } from 'react-native'
import { styles } from "./styles";

const MapPreview = ({location}) => {
    const mapUrl = location ? URL_MAPS(location) : ""
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}> This is the map Preview Component</Text>
            {location ?
            <View> 
                <Image style = {styles.mapImage} source = {{uri: mapUrl}}/>
                <Text> {location.lat.toString().slice(0, 7)}, {location.lng.toString().slice(0, 7)} </Text>
            </ View>
            :
            <Text> No location selected yet </Text>
            }
        </View>
    )
}

export default MapPreview