import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.lightGrey,
        borderRadius: 30,
        width: '90%'
    },
    preview: {
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.black,
        borderWidth: 1,
        margin: 5,
        borderRadius: 25,
        width: 130,
        height: 130
    },
    image: {
        width: '80%',
        height: '80%'
    },
    chooseImageButton: {
        backgroundColor: colors.pink,
        margin: 5,
        padding: 10
    },
    warningText: {
        textAlign: 'center'
    }
})