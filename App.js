import React from 'react';
import { useState } from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Keyboard
} from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState('');
  const [tasksItems, setTasksItems] = useState([])

  const handleAdd = () => {
    Keyboard.dismiss();
    if (!task) return;
    else {
      setTasksItems([...tasksItems, task])
      setTask(null);
    }
  };

  const completeTask = (index) => {
    let itemsCopy = [...tasksItems];
    itemsCopy.splice(index, 1);
    setTasksItems(itemsCopy);
  };

  const editTask = (index, str) => {
    let itemsCopy = [...tasksItems];
    itemsCopy[index] = str;
    setTasksItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.title}>Today's Tasks</Text>

        <View style={styles.items}>
          {
            tasksItems.map((item, index) => {
              return (
                <>
                  <View key={index}>
                    <View style={styles.taskContainer}>
                      <Task key={index} text={item} />
                      <TouchableOpacity style={styles.editBtn} onPress={() => editTask(index, "string")}>
                        <Text>✏️</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.deleteBtn}  onPress={() => completeTask(index)}>
                        <Text>❌</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              )
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.input}>
        <View style={styles.inputContainer}>
          <View>
            <TextInput style={styles.textInput} placeholder={'Write a Task'} value={task} onChangeText={text => setTask(text)} />
          </View>
          <TouchableOpacity style={styles.addBtn} onPress={() => handleAdd()}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6EBF0'
  },

  taskContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },  

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  input: {
    position: 'absolute',
    width: '88%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 10,
    marginBottom: 30,
    marginHorizontal: 20,
  },

  inputContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  addBtn: {
    display: 'flex',
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#7BE382',
    alignItems: 'center',
    justifyContent: 'center'
  },

  btnText: {
    fontSize: 24,
    color: 'green',
    fontWeight: 'bold',
  },

  textInput: {
    display: 'flex',
    fontSize: 20,
    width: '180%'
  },
});

