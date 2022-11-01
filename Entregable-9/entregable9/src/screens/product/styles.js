import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.beige,
    },
    imageContainer: {
        backgroundColor: colors.black,
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    infoContainer: {
        backgroundColor: colors.brown,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderRadius: 25,
        marginTop: 5,
        padding: 10,
        width: '98%',
        height: '48%'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 4
    },
    buttonContainer: {
        width: '95%'
    },  
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    priceText: {
        textAlign: 'center',
        fontSize: 20,
        color: colors.white
    },
    descriptionText: {
        marginTop: 5,
        color: colors.black,
    },
    imageText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: 'bold'
    },
    buttonText: {
        color: colors.white,
        fontWeight: 'bold'
    },
    addToCartButton: {
        backgroundColor: colors.green,
        width: '95%',
        alignItems: 'center',
        borderRadius: 12,
        padding: 20,
        margin: 10,
    },

})