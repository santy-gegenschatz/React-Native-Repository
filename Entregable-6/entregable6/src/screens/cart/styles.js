import {StyleSheet} from 'react-native'
import { colors } from '../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.beige
  },
  containerList: {
    width: 400
  },
  disabledButtonConfirm: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: colors.grey,
    height: 85,
    justifyContent: 'center',
    width: 370,
  }, 
  footer: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: colors.black,
    height: 85,
    justifyContent: 'center',
    width: 370,
  },
  footerTitle: {
    color: colors.white,
    fontSize: 23,
    fontWeight: 'bold',
  },
  footerView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})