import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    products__button__view: {
        alignItems: 'center',
        backgroundColor: colors.secondary,
        padding: 15
    },
    products__main__view: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    products__text: {
        fontSize: 20,
        fontFamily: 'Pacifico-Regular',
        textAlign: 'center'
    },
    flatlist: {
        backgroundColor: colors.grey
    }
})