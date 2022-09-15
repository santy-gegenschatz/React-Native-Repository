import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, TouchableOpacity, Text, TextInput, View, Modal } from 'react-native';
import { styles } from './MainScreenStyles';

export default function MainScreen() {
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
    setItemSelected(tasks.find(item => item.id === id))
    setModalVisible(!modalVisible);
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
      <Modal visible = {modalVisible} animationType = 'slide'>
        <Text> Are you sure you would like to delete the following item? </Text>
        <Text style = {styles.textDisplay}> {itemSelected?.value} </Text>
        <View style = {styles.modalButtonsContainer}>
          <Button onPress = {() => setModalVisible(!modalVisible)} title = 'Cancel'  > </Button>
          <Button onPress = {() => onHandlerDelete(itemSelected.id)} title = 'Confirm'> </Button>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}