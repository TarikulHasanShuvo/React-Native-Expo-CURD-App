import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Todo List</Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        maxHeight: 50,
        flex: 1,
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
