import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.white,
        margin: 5
    },
    mapContainer: {
        margin: 15,
        width: '100%',
        height: '80%',
        alignItems: 'center'
    },
    confirmButton: {
        backgroundColor: colors.green,
        margin: 5,
        padding: 10,
        width: '80%',
        borderRadius: 22,
        alignItems: 'center'
    }
})