import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: '95%',
        backgroundColor: colors.lightGrey,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 5
    }
})