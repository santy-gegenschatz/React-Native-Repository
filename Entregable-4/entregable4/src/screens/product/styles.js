import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    product__button__view: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    product__main__view: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    product__text: {
        fontSize: 40,
        fontFamily: 'Pacifico-Regular',
        textAlign: 'center'
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
    }
})