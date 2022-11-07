import {StyleSheet} from 'react-native'
import { colors } from '../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.beige,
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    flatlist: {
        backgroundColor: colors.beige,
        width: '100%'
    },
    alertMessageContainer: {
        justifyContent: 'center',
        padding: 1,
    }
})