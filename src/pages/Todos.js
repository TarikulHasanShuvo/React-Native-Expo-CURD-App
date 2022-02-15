import React, {useRef, useState} from 'react';
import {Alert, View} from "react-native";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import {useDispatch} from "react-redux";
import { deleteTodo } from '../store/reducers/todoReducer'


const Todos = () => {
    const dispatch = useDispatch()
    const addTodoRef = useRef()


    const editTodo = (todo) => {
        addTodoRef.current.addEditText(todo);
    }
    return (
        <View>
            <AddTodo ref={addTodoRef}/>
            <TodoList  deleteTodo={(id) => dispatch(deleteTodo(id))} editTodo={editTodo}/>
        </View>
    );
};

export default Todos;