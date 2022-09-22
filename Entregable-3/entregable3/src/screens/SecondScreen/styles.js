import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
    secondScreen__view: {
        backgroundColor: Colors.blue,
        width: 350,
        height: 300,
        justifyContent: 'center',
        borderRadius: 25
    },
    secondScreen__text: {
        textAlign: 'center'
    }
})