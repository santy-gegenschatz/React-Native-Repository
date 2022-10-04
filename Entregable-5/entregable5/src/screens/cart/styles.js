import {StyleSheet} from 'react-native'
import { colors } from '../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.beige
  },
  containerList: {
    backgroundColor: colors.red,
    width: 400
  },
  footer: {
    backgroundColor: colors.black,
    height: 100
  }
})