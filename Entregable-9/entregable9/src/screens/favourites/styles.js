import {StyleSheet} from 'react-native'
import { colors } from '../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.beige,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    flatlist: {
        backgroundColor: colors.beige,
        width: '100%'
    }
})