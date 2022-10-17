import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.green,
        margin: 10,
        borderRadius: 20, 
        width: 350,
        padding: 15
    },
    title: {
        fontSize: 22,
        color: colors.white
    },
    subtitle: {
        fontSize: 18,
        color: colors.black
    },
    lowerView: {
        flexDirection: 'row'
    }
})