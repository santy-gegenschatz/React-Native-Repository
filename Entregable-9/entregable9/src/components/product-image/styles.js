import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        width: '99%',
        height: '99%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.black
    },
    text: {
        color: colors.green,
        textAlign: 'center',
        fontSize: 25,
    },
    image: {
        width: '99%',
        height: '99%',
        resizeMode: 'contain'
    }
})