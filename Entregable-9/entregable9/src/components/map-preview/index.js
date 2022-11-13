import React from "react";
import { URL_MAPS } from '../../utils/maps' 
import { View, Text, Image } from 'react-native'
import { styles } from "./styles";

const MapPreview = ({location}) => {
    const mapUrl = location ? URL_MAPS(location.lat, location.lng) : ""
    return (
        <View style = {styles.container}>
            {location ?
            <View> 
                <View style = {styles.mapImageContainer}> 
                    <Image style = {styles.mapImage} source = {{uri: mapUrl}}/>
                </View>
                <Text style = {styles.text}> {location.lat.toString().slice(0, 7)}, {location.lng.toString().slice(0, 7)} </Text>
            </ View>
            :
            <Text style = {styles.text}> No location selected yet </Text>
            }
        </View>
    )
}

export default MapPreview