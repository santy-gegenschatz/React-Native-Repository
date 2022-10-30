import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    categories__button__view: {
        backgroundColor: colors.beige,
        alignItems: 'center',
        padding: 10
    },
    categories__main__view: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    categories__text: {
        textAlign: 'center',
        fontFamily: 'Pacifico-Regular',
        fontSize: 20,
        marginBottom: 10
    },
    containerList: {
        backgroundColor: colors.grey
    }
})