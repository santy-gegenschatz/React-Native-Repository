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
    width: 400
  },
  footer: {
    margin: 10,
    borderRadius: 20,
    backgroundColor: colors.black,
    height: 100,
    justifyContent: 'center',
    width: 370,

  },
  footerTitle: {
    color: colors.white,
    fontSize: 23,
    fontWeight: 'bold',
    padding: 20
  },
  footerView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})