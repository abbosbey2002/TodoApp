import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native'
import { Text, View, StyleSheet, Button } from 'react-native-web'
import { AntDesign } from '@expo/vector-icons'; 
import { useDispatch } from 'react-redux';
import { addtodo, editTodo } from '../../context/reducers/todoReducer';




function Add({update, taskId, setUpdate}) {
 const [todoText, setTodoText]=useState();
 const dispatch = useDispatch();

  const handlrsubmit = (e) =>{
  e.preventDefault();
  if(todoText !== ""){
    dispatch(addtodo(todoText))
    setTodoText("")
  }
 }
 const handleEdit = () => {
  if (todoText) {
    dispatch(editTodo({ id:taskId, todoText }));
    setUpdate(false)
    setTodoText('')
    
  }
};

  return (
    <View style={styles.InputContainer}>
        <TextInput value={todoText} onChangeText={setTodoText} style={styles.textInput} placeholder='type task'  />
        
        {update ? <AntDesign onPress={()=>handleEdit()} name="checkcircle" size={24} color="blue" /> : <AntDesign name="plus" onPress={handlrsubmit}  size={28} color="blue" />}
        
    </View>
  )
}

const styles=StyleSheet.create({
    InputContainer: {
    flexDirection: "row",
    marginBottom: "25px",
    alignItems: "center",
    justifyContent: "space-between",
    with: "80%",
  

    },
    textInput : {
        fontSize: "20px",
        padding: "10px",
        borderColor: 'blue',
        borderWidth: "2px",
        borderRadius: "20px",
        margin: "5px",
    },
   
})


export default Add;

