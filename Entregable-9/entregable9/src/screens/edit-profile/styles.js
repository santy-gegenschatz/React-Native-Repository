import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.beige,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dataContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%'
    },
    inputsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colors.lightGrey,
        borderRadius: 22,
        marginTop: 5,
        padding: 7
    },
    saveChangesButton: {
        backgroundColor: colors.green,
        width: '90%',
        alignItems: 'center',
        borderRadius: 25,
        padding: 20,
        margin: 10
    },
    buttonText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16
    },
    userNameContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    addressContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        margin: 5,
        backgroundColor: colors.white,
        padding: 10,
        width: 150,
        borderRadius: 20,
        textAlign: 'center',
    }
})