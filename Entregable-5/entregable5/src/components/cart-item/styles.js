import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        backgroundColor: colors.green,
        borderRadius: 25,
        shadowOffset: 3
    },
    headerContainer: {
        backgroundColor: colors.green,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 22
    }
})