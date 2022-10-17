import {StyleSheet} from 'react-native'
import { colors } from '../../constants/colors'

export const styles = StyleSheet.create({
  buttonConfirm: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: colors.black,
    height: 85,
    justifyContent: 'center',
    width: 370,
  },
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
  buttonConfirmTitle: {
    color: colors.white,
    fontSize: 23,
    fontWeight: 'bold',
  },
  buttonConfirmView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})