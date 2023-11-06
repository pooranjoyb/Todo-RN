import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View
} from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.title}>Today's Tasks</Text>

        <View style={styles.items}>
          <Task text={'test1'} />
          <Task text={'test2'} />
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.input}>
        <View style={styles.inputContainer}>
          <View>
            <TextInput style={styles.textInput} placeholder={'Write a Task'} />
          </View>
          <View style={styles.addBtn}>
            <TouchableOpacity>
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
          </View>
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
    fontSize: 20
  },
});

