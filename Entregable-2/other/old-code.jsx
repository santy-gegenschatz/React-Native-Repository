import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [textItem, setTextItem] = useState('');
  const [tasks, setTasks] = useState([{id: 1, value: 'Buy Coca Cola'}]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState([]);

   const onHandlerChangeItem = (t) => { 
    console.log(t);
    setTextItem(t);
  }

  const addTask = () => {
    console.log('Tasks: ', tasks);
    console.log('Text Item: ', textItem);
    if(tasks.length === 0) {
      setTasks([{id: Math.random().toString(), value : textItem}])
    } else {
      console.log('tasks 2');
      setTasks([...tasks, {id: Math.random().toString(), value : textItem}])
    }
    setTextItem('')
  }

  return (
    // The overall container houses two views
    <View style={styles.container}>
      {/* The first one houses the input and button to create a new task */}
      <View style = {styles.inputContainer}> 
        <TextInput placeholder = 'List Item' style = {styles.input} onChangeText = {(t) => onHandlerChangeItem(t)} value = {textItem} />
        <Button title = 'Add Task' onPress = {addTask}/>
      </View>
      {/* The second one houses the list with the tasks. */}
      {/* Each task is clickable, and upon beingclicked will open a modal that will allow the deletion of said task */}
      <View style = {styles.itemsListContainer}>
        {tasks.map( (element) => {
          return (
            <View style = {styles.itemView}>
              <Text key = {element.id} style = {{textAlign: 'center', fontSize: 20}}> {element.value} </Text>
            </View>
          )
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
    backgroundColor: '#ffffff',
    padding: 30
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
    backgroundColor: '#BBF6F9',
    height: 45,
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 15
  }
});
