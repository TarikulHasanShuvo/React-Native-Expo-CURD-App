import React, {useState} from 'react';
import {Alert, Button, StyleSheet, TextInput, View} from "react-native";
import {Picker} from '@react-native-picker/picker';
import axios from "axios";
import {API_URL} from "@env";

const AddProduct = ({navigation}) => {

    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");

    const saveProductInApi = () => {
        let data = { name, color, size, price };
        axios.post(`${API_URL}product`,data)
            .then(res=>{
                navigation.navigate('Home')
                //console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <View style={{padding: 10}}>
            <TextInput
                style={styles.textInput}
                placeholder="Name"
                onChangeText={newText => setName(newText)}
                defaultValue={name}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Color"
                onChangeText={newText => setColor(newText)}
                defaultValue={color}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Price"
                onChangeText={newText => setPrice(newText)}
                defaultValue={price}
            />

            <Picker
                selectedValue={size}
                style={styles.textInputSize}
                onValueChange={(itemValue) => setSize(itemValue)}
                placeholder="Pick a single language"
            >
                <Picker.Item  disabled label="Size" value=""/>
                <Picker.Item label="S" value="S"/>
                <Picker.Item label="M" value="M"/>
                <Picker.Item label="L" value="L"/>
                <Picker.Item label="XL" value="XL"/>
                <Picker.Item label="XXL" value="XXL"/>
            </Picker>
            <Button
                title="Save Product"
                onPress={() => saveProductInApi()}
            />
        </View>
    );
};

export default AddProduct;

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderRadius: 5,
        backgroundColor: "#fff",
        paddingLeft: 10,
        elevation: 10,
        marginBottom: 20

    },
    textInputSize: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 6,
        elevation: 10,
        marginBottom: 20,
        height : 40

    }
})