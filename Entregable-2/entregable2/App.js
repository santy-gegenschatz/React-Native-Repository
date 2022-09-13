import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [textItem, setTextItem] = useState('');
  const [tasks, setTasks] = useState([]);

  const onHandlerChangeItem = (t) => { setTextItem(t)}

  const addTask = () => {
    setTasks(...tasks, 
      {id: Math.random().toString(), value : textItem}
      )
    setTextItem('')
  }

  return (
    // The overall container houses two views
    <View style={styles.container}>
      {/* The first one houses the input and button to create a new task */}
      <View style = {styles.inputContainer}> 
        <TextInput placeholder = 'List Item' style = {styles.input} onChangeText = {onHandlerChangeItem}/>
        <Button title = 'Add Task' onPress = {addTask}/>
      </View>
      {/* The second one houses the list with the tasks. */}
      {/* Each task is clickable, and upon beingclicked will open a modal that will allow the deletion of said task */}
      <View style = {styles.itemsListContainer}>
        {tasks.map( (element) => {
          <Text id = {element.id}> {element.value} </Text>
        })}
      </View>
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
