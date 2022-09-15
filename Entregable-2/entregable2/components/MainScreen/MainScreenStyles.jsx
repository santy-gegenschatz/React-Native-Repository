// The styles object contains styles for every different component
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      padding: 5
    },
    input: {
      borderBottomColor: 'black', 
      borderBottomWidth: 1,
      width: 200,
      marginRight: 30
    },
    inputContainer: {
      marginTop: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: 20,
      paddingHorizontal: 40,
      backgroundColor: '#DCDCDC',
      borderRadius: 25,
    },
    itemsListContainer: {
      flex: 1,
      backgroundColor: '#DDDDDD',
      marginTop: 20,
      width: 330,
      borderRadius: 25,
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    },
    itemView: {
      flex: 1,
      backgroundColor: '#BBF6F9',
      height: 45,
      borderRadius: 25,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 15
    },
    itemText: {
      fontWeight: 'bold',
      textAlign: 'center', 
      fontSize: 20
    },
    itemDelete: {
      fontSize: 30,
      marginRight: 10,
      color: 'black',
    },
    modalButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: 100,
      margin: 20,
      padding: 30
    },
    textDisplay: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 25
    }
  });