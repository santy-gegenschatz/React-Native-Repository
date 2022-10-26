import { StyleSheet } from 'react-native'
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        borderRadius: 30,
        width: '80%',
        margin: 10,
        padding: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1
    },
    imageContainer: {
        marginTop: 10,
        backgroundColor: colors.white,
        borderRadius: 50,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems:'center',
        height: 200,
        width: 200
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    userNameText: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 5
    },
    imageText: {
        textAlign: 'center'
    }

})