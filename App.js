import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import List from './components/list/List';
import Add from './components/add/Add';
import { Provider } from 'react-redux';
import store from './context/store';
import { ScrollView } from 'react-native-web';
import React, {useState} from 'react';

export default function App() {
  const [update, setUpdate] = useState(false);
  const [taskId, setTaskId] = useState(null);
  const [text, setText] = useState("");


  const updateTodo=(data)=>{
      setTaskId(data.id)
      setUpdate(true)
      setText(data.text)
  }
 
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <View style={styles.listContainer}>
      

      <Text style={styles.header}>Todo List app!</Text>
          <List updateTodo={updateTodo}/>
      </View>
          <Add update={update} setUpdate={setUpdate} taskId={taskId} oldText={text} />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "space-between",
    maxHeight: "100%",
  },
  header: {
    fontFamily: 'Helvetica',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '300',
    textAlign: 'center',
    color: 'white',
    // View styles
    backgroundColor: 'steelblue',
    borderRadius: 12,
    padding: 20,
  },
  listContainer: {
    // borderWidth: "2px",
    width: "90%",
    marginTop: "10px",
    

  }
});
