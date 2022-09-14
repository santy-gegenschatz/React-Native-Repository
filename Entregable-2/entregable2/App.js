import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [textItem, setTextItem] = useState('');
  const [tasks, setTasks] = useState([{id: '1', value: 'Buy Coca Cola'}, {id: '2', value : 'Buy Lemonade'}, {id: '3', value : 'Buy Water'}]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

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

  const renderItem = ({item}) => {
    console.log(item);
    return (
    <View style = {styles.itemView}>
      <Text style = {styles.itemText}> {item.value} </Text>
      <TouchableOpacity onPress = {() => onHandleModal(item.id)}>
        <Text style = {styles.itemDelete}> X </Text>
      </TouchableOpacity>
    </View>
    )
  }

  const onHandleModal = (id) => {
    setModalVisible(!modalVisible);
    setItemSelected(tasks.find(item => item.id === id))
  }

  const onHandlerDelete = (id) => {
    setTasks(tasks.filter( (item) => item.id !== id));
    setItemSelected(null);
    setModalVisible(!modalVisible)
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
      <FlatList data = {tasks} renderItem = {renderItem} keyExtractor = {(item) => item.id} styles = {styles.itemsListContainer} />
      <StatusBar style="auto" />
    </View>
  );
}

// The styles object contains styles for every different component
const styles = StyleSheet.create({
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
  }
});
