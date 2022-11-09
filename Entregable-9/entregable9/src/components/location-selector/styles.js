import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '90%',
      borderWidth: 1,
      borderRadius: 25,
      height: '55%',
      marginTop: 20,
      padding: 3
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    mapContainer: {
      backgroundColor: colors.beige,
      height: '60%',
      width: '99%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      width: '80%',
      borderRadius: 22,
      backgroundColor: colors.brown,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 7
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