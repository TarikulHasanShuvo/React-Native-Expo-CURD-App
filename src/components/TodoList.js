import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SingeTodo from "./SingeTodo";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#fc628b',
        marginTop: 20
        // marginTop: StatusBar.currentHeight || 0,
    },
    header: {
        padding : 10,
        backgroundColor: '#fc628b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontWeight : "bold",
        letterSpacing : 1.5,
        fontSize : 18
    }
});

const TodoList = ({deleteTodo,editTodo}) => {
    const {todoList} = useSelector(state => state.todo)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Todo List</Text>
            </View>
            <FlatList
                data={todoList}
                renderItem={({item,index}) => <SingeTodo item={item} index={index} deleteTodo={deleteTodo} editTodo={editTodo}/>}
            />
        </SafeAreaView>
    );
}

export default TodoList;