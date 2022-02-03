import {Button, FlatList, View, Text, StyleSheet} from "react-native";
import * as React from "react";
import axios from "axios";
import {useEffect, useState} from "react";

const HomeScreen = ({navigation}) => {
    const [jsonData,setJsonData] = useState([]);
    useEffect(()=>{
        getDataFromAPI();
    },[])
    const getDataFromAPI = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setJsonData(res.data)
            }).catch()
    }
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button
                onPress={() => navigation.navigate('Todos')}
                title="Go to Todo Page"
            />

            <FlatList style={{ marginTop : 20}}
                data={jsonData}
                renderItem={({item ,index}) => <Text style={styles.item}>{index+1 +' . '+item.title}</Text>}
            />
        </View>
    );
};

export default HomeScreen;

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
        color: '#fff',
        padding : 10,
        backgroundColor : "tomato",
        marginBottom : 10
    },
    icon: {
        paddingEnd: 15
    },
    iconView: {
        flexDirection: "row",
    }
});