import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        borderRadius: 15,
        height: 25,
        color: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 8,
        maxWidth: 115
    },
    text: {
        fontWeight: 'bold'
    }
})