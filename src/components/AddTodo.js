import React, {forwardRef, useRef,useImperativeHandle, useState} from 'react';
import {Alert, Button, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addNewTodo, updateTodo} from '../store/reducers/todoReducer'

const AddTodo = ({},ref) => {
    const ref_input = useRef();
    const [text, setText] = useState('');
    const [editText, setEditText] = useState();
    const dispatch = useDispatch()

    useImperativeHandle(ref, () => ({
       addEditText: (todo) => {
            addEditText(todo)
        }
    }))
    const addEditText = (todo) => {
        setEditText(todo);
        setText(todo.title);
        ref_input.current.focus()
    }

    const addTodo = (newTodo) => {
        if (newTodo === "") {
            Alert.alert('Warning !', 'To add todo please fill input box.');
        } else {
            dispatch(addNewTodo(newTodo));
            resetText();
        }
    }

    const updateOldTodo = (todo) => {
        dispatch(updateTodo(todo));
        resetText();
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
                             onPress={() => updateOldTodo({id: editText.id, title: text})}
                />
            }
        </View>
    );
}

export default forwardRef(AddTodo);