import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
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
    product__touchable_button: {
        alignItems: 'center',
        backgroundColor: colors.red,
        padding: 10
    }
})