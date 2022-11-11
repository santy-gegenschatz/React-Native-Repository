import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 20,
        backgroundColor: colors.brownish,
        borderRadius: 25,
        padding: 10,
        height: 180
    },
    imageContainer: {
        width: '40%',
        height: '98%'
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    descriptionContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    deleteButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    }
})