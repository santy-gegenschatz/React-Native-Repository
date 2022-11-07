import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.brown,
        padding: 10,
        margin: 10,
        borderRadius: 15,
        height: 200,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },  
    text: {

    },
    button: {
        backgroundColor: colors.green,
        width: '95%',
        alignItems: 'center',
        borderRadius: 12,
        padding: 20,
        margin: 10,
    },
    buttonText: {
        color: colors.white,
        fontWeight: 'bold'
    }
})