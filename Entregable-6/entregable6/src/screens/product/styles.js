import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: colors.beige
    },
    itemContainer: {
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        margin: 25,
        padding: 10
    },
    description: {
        fontWeight: 'bold',
        color: colors.white
    }
})