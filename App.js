import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import HomeScreen from "./src/pages/HomeScreen";
import Todos from "./src/pages/Todos";
import AddProduct from "./src/pages/AddProduct";


const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Add Product" component={AddProduct} />
                <Drawer.Screen name="Todos" component={Todos} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}