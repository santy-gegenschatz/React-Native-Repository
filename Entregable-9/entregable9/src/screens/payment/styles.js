import {StyleSheet} from 'react-native'
import { colors } from '../../constants/colors'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: colors.beige
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    mapContainer: {
      backgroundColor: colors.red,
      height: '40%',
      width: '90%'
    },
    buttonsContainer: {
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    negativeButton: {
      backgroundColor: colors.red,
      margin: 5,
      padding: 10,
      width: '80%',
      borderRadius: 22,
      alignItems: 'center'
    },
    positiveButton: {
      backgroundColor: colors.green,
      margin: 5,
      padding: 10,
      width: '80%',
      borderRadius: 22,
      alignItems: 'center'
    },
    confirmText: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 20
    },
    input: {
        height: 40,
        width: '65%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center',
        backgroundColor: colors.white
    }
  })