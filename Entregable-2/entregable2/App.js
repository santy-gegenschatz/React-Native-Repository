import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks(...tasks, taskName)
  }

  return (
    // The overall container houses two views
    <View style={styles.container}>
      {/* The first one houses the input and button to create a new task */}
      <View style = {styles.inputContainer}> 
        <TextInput placeholder = 'List Item' style = {styles.input} />
        <Button title = 'Add Task'/>
      </View>
      {/* The second one houses the list with the tasks. */}
      {/* Each task is clickable, and upon beingclicked will open a modal that will allow the deletion of said task */}
      <View style = {styles.itemsListContainer}>
        <ScrollView>
          
        </ScrollView>
      </View>
      <Button title = 'Trigger a Warning' onPress={ () => console.warn('Button has been clicked')}> </Button>
      <StatusBar style="auto" />
    </View>
  );
}

// The styles object contains styles for every different component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff456',
    padding: 30
  },
  input: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1,
    innerWidth: 200
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#CC5500'
  },
  itemsListContainer: {

  }
});
