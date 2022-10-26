import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    containerKeyboard: {
        flex: 1,
        backgroundColor: colors.beige,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '90%',
        maxWidth: 400,
        backgroundColor: colors.beige,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: colors.black,
        borderRadius: 25,
        padding: 5,
        height: 340
    },
    title: {
        fontSize: 30,
        fontFamily: 'Pacifico-Regular',
        textAlign: 'center',
        marginBottom: 10
    },
    subtitle: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    label: {
        margin: 5,
        fontSize: 16
    },
    input: {
        margin: 5,
        backgroundColor: colors.white,
        padding: 10,
        width: '85%',
        borderRadius: 20,
        textAlign: 'center'
    },
    password: {
        margin: 5,
        fontSize: 16
    },
    prompt: {
        justifyContent: 'center'
    },
    promptAction: {
        textAlign: 'center',
        backgroundColor: colors.red,
        height: 30,
        justifyContent: 'center'
    }, 
    promptMessage: {
        margin: 5,
        textAlign: 'center'
    },
    promptText: {
        textAlign: 'center'
    }

})