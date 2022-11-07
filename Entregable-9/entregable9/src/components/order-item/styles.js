import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.brown,
        margin: 10,
        borderRadius: 20, 
        width: 350,
        padding: 10
    },
    title: {
        fontSize: 22,
        color: colors.white,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.black
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemsContainer: {
        marginTop: 10
    },  
    lowerView: {
        flexDirection: 'row'
    },
    infoContainer: {
        marginTop: 5
    },
    itemsContainer: {
        marginVertical: 10
    },
    idText: {
        color: colors.black,
        fontSize: 16
    }
})