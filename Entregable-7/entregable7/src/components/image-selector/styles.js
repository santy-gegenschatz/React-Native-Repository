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
        width: 200,
        height: 200
    },
    image: {
        width: '80%',
        height: '80%'
    },
    chooseImageButton: {
        backgroundColor: colors.pink,
        margin: 10,
        padding: 10
    },
    userNameContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        margin: 5,
        backgroundColor: colors.white,
        padding: 10,
        width: 200,
        borderRadius: 20,
        textAlign: 'center',
    }
})