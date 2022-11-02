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
        color: colors.black,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 18,
        color: colors.black
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    lowerView: {
        flexDirection: 'row'
    },
    infoContainer: {
        marginTop: 5
    }
})