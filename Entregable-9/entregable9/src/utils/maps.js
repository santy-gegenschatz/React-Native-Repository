export const API_KEY_MAPS = "";

export const URL_MAPS = (lat, lng, zoom = 14) => {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=600x300&maptype=roadmap
    &markers=color:blue%7Clabel:S%7C${lat},${lng}&key=${API_KEY_MAPS}`;
} 

export const URL_GEOCODING = (lat, lng) => {
    return `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY_MAPS}`;
}

export const translateCoordsToAddress = async (lat, lng) => {
    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY_MAPS}`)
        const data = await response.json()
        console.log('Data: ', data);
        const address = data.results[0].formatted_address
        console.log('Address:', address);
        return address
    } catch (e) {
        console.log(e);
    }
}