import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: colors.grey
    },
    preview: {
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.black,
        borderWidth: 1,
        width: 300,
        height: 250,
        margin: 5
    },
    image: {
        width: '100%',
        height: '100%'
    },
    chooseImageButton: {
        backgroundColor: colors.pink,
        margin: 20,
        padding: 10
    },
    buttonText: {
        color: colors.white
    },
    warningText: {
        color: colors.white
    }
})