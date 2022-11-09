import {StyleSheet} from 'react-native'
import { colors } from '../../constants/colors'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.beige,
      paddingTop: 10,
      height: 2000
    },
    orderTotalContainer: {
      marginTop: 10,
      alignItems: 'center'
    },
    locationSelectorContainer: {
      marginTop: -10,
      alignItems: 'center',
      height: 600,
      width: '99%'
    },
    buttonsContainer: {
      marginTop: -230,
      marginBottom: 25,
      justifyContent: 'space-between',
      alignItems: 'center',
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
    positiveButtonDisabled: {
      backgroundColor: colors.lightGrey,
      margin: 5,
      padding: 10,
      width: '80%',
      borderRadius: 22,
      alignItems: 'center'
    },
    orderText: {
      fontSize: 18
    },
    totalText: {
      fontSize: 30,
      fontWeight: 'bold',
      margin: 5
  },
  })