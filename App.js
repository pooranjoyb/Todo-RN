import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  ScrollView,
  Keyboard
} from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState('');
  const [tasksItems, setTasksItems] = useState([])
  const [editingIndex, setEditingIndex] = useState(null);
  const [temporaryText, setTemporaryText] = useState('');

  const handleAdd = () => {
    Keyboard.dismiss();
    if (!task) return;
    else {
      setTasksItems([...tasksItems, { text: task, completed: false }])
      setTask(null);
    }
  };

  const deleteTask = (index) => {
    let itemsCopy = [...tasksItems];
    itemsCopy.splice(index, 1);
    setTasksItems(itemsCopy);
  };

  // const editTask = (index) => {
  //   setEditingIndex(index);
  //   setTemporaryText(tasksItems[index].text);
  // };

  const saveTask = (index) => {
    let itemsCopy = [...tasksItems];
    itemsCopy[index].text = temporaryText;
    setTasksItems(itemsCopy);
    setEditingIndex(null);
    setTemporaryText('');
  };

  const completeTask = (index) => {
    let itemsCopy = [...tasksItems];
    itemsCopy[index].completed = !itemsCopy[index].completed;
    setTasksItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.title}>Today's Tasks</Text>
        <ScrollView style={styles.taskScreen}>
          <View>
            <View style={styles.items}>
              {
                tasksItems.map((item, index) => {
                  return (
                    <>
                      <View key={index}>
                        <View style={styles.taskContainer}>

                          <TouchableOpacity style={item.completed ? styles.completeTask : styles.inCompleteTask} onPress={() => completeTask(index)}></TouchableOpacity>

                          {editingIndex === index ? (
                            <View style={styles.editingContainer}>
                              <TextInput
                                style={styles.editorInput}
                                value={temporaryText}
                                onChangeText={(text) => setTemporaryText(text)}
                              />
                              <TouchableOpacity
                                style={styles.doneBtn}
                                onPress={() => saveTask(index)}
                              >
                                <Text>✔️</Text>
                              </TouchableOpacity>
                            </View>
                          ) : (
                            <Task text={item.text} />
                          )}
                          
                          <TouchableOpacity style={styles.editBtn} onPress={() => setEditingIndex(index)}>
                            <Text>🖋️</Text>
                          </TouchableOpacity>

                          <TouchableOpacity style={styles.deleteBtn} onPress={() => deleteTask(index)}>
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
        </ScrollView>
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

  taskScreen: {
    height: 550,
    width: '100%',
  },

  taskContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  tasksWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 40,
    marginBottom: 20,
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
    fontSize: 40,
    color: 'green',
    fontWeight: 'bold',
    marginTop: -7
  },

  textInput: {
    display: 'flex',
    fontSize: 20,
    width: '130%',
  },

  inCompleteTask: {
    width: 24,
    height: 25,
    borderRadius: 4,
    marginRight: 5,
    backgroundColor: '#55BCF9',
    opacity: 0.8,
  },

  completeTask: {
    width: 24,
    height: 25,
    borderRadius: 4,
    marginRight: 5,
    backgroundColor: 'rgb(77 242 110)',
    opacity: 0.8,
  },

  editingContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    width: '75%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  editorInput: {
    backgroundColor: 'white',
    height: 55,
    padding: 15,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    width: '90%',
    fontSize: 20,
  }
});

