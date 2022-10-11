import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        margin: 14,
        height: 70,
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: colors.green,
        margin: 10,
        borderRadius: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 19,
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'center'
    }
})