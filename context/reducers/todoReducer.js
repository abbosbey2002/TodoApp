import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addtodo: (state, action) =>{
            const newTodo={
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            state.push(newTodo)
            console.log(newTodo);
        },
        toggleTodo: (state, action) =>{
            const todo=state.find((todo) =>todo.id === action.payload);
            if(todo){
                todo.completed= !todo.completed
            }
        },
        removeTodo: (state, action)=>{
            const index = state.findIndex((todo)=> todo.id === action.payload);
            if(index !== -1){
                state.splice(index, 1)
            }
        },
        editTodo: (state, action) => {
            const { id, todoText } = action.payload;
            const todo = state.find((todo) => todo.id === id);
            if (todo) {
              todo.text = todoText;
            }
          },
    }
})

export const {addtodo, toggleTodo, removeTodo, editTodo} =todoSlice.actions;

export default todoSlice.reducer;