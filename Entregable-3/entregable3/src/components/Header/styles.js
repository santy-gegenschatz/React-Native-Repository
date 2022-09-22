import { StyleSheet } from "react-native"
import Colors from "../../constants/Colors"

export const styles = StyleSheet.create({
    header__view: {
        backgroundColor: Colors.red,
        height: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        width: 350
    },
    header__title: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})