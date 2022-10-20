import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        width: 250,
        alignItems: 'center',
        margin: 1
    },
    input: {
        margin: 5,
        backgroundColor: colors.white,
        padding: 10,
        width: '85%',
        borderRadius: 20,
        textAlign: 'center'
    },
    errorText: {
        color: 'red'
    },
    labelText: {
        backgroundColor: colors.beige,
        textAlign: 'center'
    }
})