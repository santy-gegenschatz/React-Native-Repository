import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.red,
        margin: 10
    },
    title: {
        fontSize: 22,
        color: colors.white
    },
    subtitle: {
        fontSize: 18
    }
})