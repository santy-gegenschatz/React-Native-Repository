import {StyleSheet} from 'react-native'
import { colors } from '../../constants/colors'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.beige
    },
    orderDetailsView: {

    },
    confirmText: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 20
    },
    buttonsView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 150
    },
    negativeButton: {
      backgroundColor: colors.red,
      margin: 10,
      padding: 10,
      width: 50
    },
    positiveButton: {
      backgroundColor: colors.green,
      margin: 10,
      padding: 10,
      width: 50
    }
})