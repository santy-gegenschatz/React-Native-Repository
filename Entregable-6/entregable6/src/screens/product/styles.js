import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: 'Pacifico-Regular',
        textAlign: 'center'
    },
    itemProperties: {
        backgroundColor: colors.grey,
        justifyContent: 'center'
    },
    description: {
        fontWeight: 'bold',
        color: colors.white
    },
    product__touchable_button_one: {
        alignItems: 'center',
        backgroundColor: colors.red,
        padding: 10,
        margin: 10
    },
    product__touchable_button_two: {
        alignItems: 'center',
        backgroundColor: colors.green,
        padding: 10
    },
    product__button__view: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})