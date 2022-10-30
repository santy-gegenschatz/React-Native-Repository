import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    containerKeyboard: {
        flex: 1,
        backgroundColor: colors.beige,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    saveChangesButton: {
        backgroundColor: colors.green,
        width: '90%',
        alignItems: 'center',
        borderRadius: 25,
        padding: 20,
        margin: 10
    },
    buttonText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16
    }
})