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
        width: 300,
        height: 300,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
    },
    infoContainer: {
        backgroundColor: colors.brown,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 25,
        margin: 5,
        padding: 10,
        width: '98%',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    descriptionText: {
        color: colors.white
    },
    priceText: {
        textAlign: 'center'
    },
    addToCartButton: {
        backgroundColor: colors.green,
        width: '90%',
        alignItems: 'center',
        borderRadius: 25,
        padding: 20,
        margin: 10,
    },
    imageText: {
        fontSize: 30,
        color: colors.white,
        fontFamily: 'bold'
    }
})