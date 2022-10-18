import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    containerKeyboard: {
        flex: 1,
        backgroundColor: colors.beige,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '90%',
        maxWidth: 400,
        backgroundColor: colors.beige,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: colors.black,
        borderRadius: 25,
        borderStyle: '',
        padding: 20
    },
    title: {
        fontSize: 20,
        fontFamily: 'Pacifico-Regular',
        textAlign: 'center'
    },

})