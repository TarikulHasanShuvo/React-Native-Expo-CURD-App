import React, {useRef, useState} from 'react';
import {Alert, View} from "react-native";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import uuid from 'react-native-uuid';

const Todos = () => {
    const addTodoRef = useRef()
    const [todoList, setTodoList] = useState([
        {
            id: uuid.v4(),
            title: 'todo1'
        },
        {
            id: uuid.v4(),
            title: 'todo2'
        }
    ]);

    const addTodo = (newTodo) => {
        if (newTodo == "") {
            Alert.alert('Warning !', 'To add todo please fill input box.');
        } else {
            setTodoList([...todoList, {id: uuid.v4(), title: newTodo}]);
            addTodoRef.current.resetText();
        }
    }

    const deleteTodo = (id) => {
        setTodoList(todoList.filter(item => item.id !== id))
    }
    const editTodo = (todo) => {
        addTodoRef.current.addEditText(todo);
    }

    const updateTodo = (todo) => {
        setTodoList(todoList.map(item => item.id === todo.id ? todo : item));
        addTodoRef.current.resetText();
    }
    return (
        <View>
            <AddTodo ref={addTodoRef} addTodo={addTodo} updateTodo={updateTodo}/>
            <TodoList todoList={todoList} deleteTodo={deleteTodo} editTodo={editTodo}/>
        </View>
    );
};

export default Todos;