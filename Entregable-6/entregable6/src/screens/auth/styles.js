import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.beige,
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: 'Pacifico-Regular',
        textAlign: 'center'
    }
})