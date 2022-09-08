import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const onHandleChangeText = (text) => {
    setTask(text);
  }
  return (
    <View style={styles.container}>
      <View style = {styles.inputContainer}> 
        <TextInput placeholder = 'List Item' style = {styles.input}> </TextInput>
        <Text> Hello, Coder! </Text>
        <Button title = 'ADD' onPress={ () => console.warn('Button has been clicked')}> </Button>
      </View>
      <View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// The styles object contains styles for every different component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1,
    innerWidth: 200
  },
  inputContainer: {

  }
});
