import {createSlice} from '@reduxjs/toolkit'
import uuid from "react-native-uuid";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoList: [
            {
                id: uuid.v4(),
                title: 'todo1'
            },
            {
                id: uuid.v4(),
                title: 'todo2'
            }
        ]
    },
    reducers: {
        addNewTodo: (state, PayloadAction) => {
            state.todoList = ([...state.todoList, {id: uuid.v4(), title: PayloadAction.payload}]);
        },

        deleteTodo: (state, PayloadAction) => {
            state.todoList = state.todoList.filter(item => item.id !== PayloadAction.payload)
        },

        updateTodo: (state,PayloadAction) => {
            state.todoList = state.todoList.map(item => item.id === PayloadAction.payload.id ? PayloadAction.payload : item);
        }
    },
})

export const {addNewTodo,updateTodo,deleteTodo,} = todoSlice.actions


export default todoSlice.reducer