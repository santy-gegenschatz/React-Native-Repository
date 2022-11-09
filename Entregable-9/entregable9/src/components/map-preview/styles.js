import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: '95%',
        backgroundColor: colors.grey,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 5
    },
    mapImage: {
        minWidth: '95%',
        minHeight: '80%',
        height: 100,
        borderRadius: 22,
        borderWidth: 1,
        margin: 5
    },
    text: {
        textAlign: 'center'
    }
})