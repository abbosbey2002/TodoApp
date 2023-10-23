import React from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native-web';
import {useDispatch, useSelector} from 'react-redux';
import {removeTodo, toggleTodo, editTodo} from '../../context/reducers/todoReducer';
import {Ionicons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 






function List({updateTodo}) {

    const todos = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const handleToggle = (id) => {
        dispatch(toggleTodo(id));
    }

    const handleRemove = (id) => {
        dispatch(removeTodo(id));
    }

    return (
      <ScrollView>
        
        <View style={
            styles.ItemContainer
        }>
            {
            todos.map(todo => (
                <View key={
                        todo.id
                    }
                    style={
                        styles.listBox
                }>
                    <Text>{
                        todo.text
                    } </Text>
                    <View style={styles.actionBox}>
                    
                        {!todo.completed && <MaterialIcons onPress={()=>handleToggle(todo.id)} name="radio-button-unchecked" size={24} color="black" />}
                     {todo.completed && <Entypo name="check" size={24} color="black" />}
                    <AntDesign name="edit" onPress={()=>updateTodo({id:todo.id, text:todo.text })} size={24} color="black" />
                    <Ionicons name="md-trash"
                        onPress={
                            () => handleRemove(todo.id)
                        }
                        size={24}
                        color="red"/>
                    </View>
                </View>
            ))
        } </View>
      </ScrollView>
    )
}

export default List;


const styles = StyleSheet.create({
    listBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
        borderWidth: "1px",
        padding: "5px",
        borderRadius: "7px",
        borderColor: "green",

    },
    ItemContainer: {
        backgroundColor: "#fff",
        paddingBottom: "10px",
        paddingTop: "10px",
        letterSpacing: "1.5px",
        

    },
    actionBox:{
      flexDirection: "row",
    }
})
