import React, {useState} from 'react';
import {Button, StyleSheet, TextInput} from "react-native";
import {Picker} from '@react-native-picker/picker';
import {Card, Divider, Layout, Text} from '@ui-kitten/components';
import axios from "axios";
import {API_URL} from "@env";

const AddProduct = ({navigation}) => {

    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");

    const saveProductInApi = () => {
        let data = {name, color, size, price};
        axios.post(`${API_URL}product`, data)
            .then(res => {
                navigation.navigate('Home')
                //console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Layout style={{padding: 10}}>
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
                <Picker.Item disabled label="Size" value=""/>
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
            <Card>
                <Text appearance='hint' status='success'>
                    Hint Text.
                </Text>
                <Divider/>
                <Text category='h6'>
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                </Text>

            </Card>
        </Layout>
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
        height: 40

    }
})