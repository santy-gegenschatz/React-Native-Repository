import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        margin: 10,
        height: 300,
        borderRadius: 20,
        justifyContent: 'flex-start',
        backgroundColor: colors.brown,
        borderRadius: 20,
        padding: 10
    },
    favouriteContainer: {
        margin: 10,
        height: 300,
        borderRadius: 20,
        justifyContent: 'flex-start',
        backgroundColor: colors.brownish,
        borderRadius: 20,
        padding: 10
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.black,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 19,
        color: colors.black,
        textAlign: 'center'
    },
    image: {
        width: 300,
        height: 200
    },
    imageContainer: {
        backgroundColor: colors.black,
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        height: '80%'
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    descriptionContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    favouriteDescriptionContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 7
    },
    priceText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.white
    }
})