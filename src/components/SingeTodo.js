import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


const SingeTodo = ({item, index, deleteTodo,editTodo}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.item}>{(index + 1) + ' . ' + item.title}</Text>
           <View style={styles.iconView}>
               <Icon onPress={() => editTodo(item)}  style={styles.icon} name="edit" size={18} color="blue"/>
               <Icon onPress={() => deleteTodo(item.id)}  style={styles.icon} name="trash" size={18} color="red"/>
           </View>
        </View>
    );
};

export default SingeTodo;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 8,
        fontSize: 18,
        height: 44,
        borderColor: '#ddd',
        borderStyle: "solid",
        borderTopWidth: 3,
        borderBottomWidth: 3,
        justifyContent: 'space-between',
    },
    item: {
        color: '#000',
    },
    icon: {
        paddingEnd: 15
    },
    iconView: {
        flexDirection: "row",
    }
});