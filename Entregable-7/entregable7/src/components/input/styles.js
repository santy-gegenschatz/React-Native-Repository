import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.beige,
        width: 300,
        alignItems: 'center',
        margin: 5
    },
    input: {
        margin: 5,
        backgroundColor: colors.white,
        padding: 10,
        width: '90%',
        borderRadius: 20,
        textAlign: 'center'
    },
    errorText: {
        color: 'red'
    },
    labelText: {
        backgroundColor: colors.beige,
        textAlign: 'center'
    },
    messageContainer: {
        backgroundColor: colors.grey,
    }
})