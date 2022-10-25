import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.beige,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontFamily: 'Pacifico-Regular',
        color: colors.black
    },
    imageContainer: {
        backgroundColor: colors.red,
        width: 350,
        heigh: 200,
        flex: 1
    },
    saveImageButton: {
        backgroundColor: colors.pink,
        margin: 5,
        padding: 10
    },
    buttonText: {
        color: colors.white
    },
    logOutButton: {
        width: '80%',
        backgroundColor: colors.red,
        height: 50,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: 'center',
        margin: 10
    }
})