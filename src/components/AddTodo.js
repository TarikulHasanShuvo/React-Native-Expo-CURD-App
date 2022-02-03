import React, {forwardRef, useImperativeHandle, useState,useRef} from 'react';
import {Button, TextInput, View} from 'react-native';

const AddTodo = ({addTodo,updateTodo}, ref) => {
    const ref_input = useRef();
    const [text, setText] = useState('');
    const [editText, setEditText] = useState();

    useImperativeHandle(ref, () => ({
        resetText: () => {
            resetText()
        }, addEditText: (todo) => {
            addEditText(todo)
        }
    }))

    const addEditText = (todo) => {
        setEditText(todo);
        setText(todo.title);
        ref_input.current.focus()
    }
    const resetText = () => {
        setText('');
        setEditText(null);
    }
    return (
        <View style={{padding: 10}}>
            <TextInput
                style={{height: 40}}
                placeholder="Type here..."
                onChangeText={newText => setText(newText)}
                defaultValue={text}
                ref={ref_input}
            />
            {
                editText == null ? <Button
                    title="+ Add Todo"
                    onPress={() => addTodo(text)}
                /> : <Button color="#ff5c5c"
                    title="update Todo"
                    onPress={() => updateTodo({id : editText.id,title : text })}
                />
            }
        </View>
    );
}

export default forwardRef(AddTodo);