import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import HomeScreen from "./src/pages/HomeScreen";
import Todos from "./src/pages/Todos";
import Test from "./src/pages/Test";
import AddProduct from "./src/pages/AddProduct";
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';


const Drawer = createDrawerNavigator();

const App = () =>  {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen}/>
                    <Drawer.Screen name="Add Product" component={AddProduct}/>
                    <Drawer.Screen name="Todos" component={Todos}/>
                    <Drawer.Screen name="Test" component={Test}/>
            </Drawer.Navigator>
        </NavigationContainer>

    );
}

export default () => (
    <ApplicationProvider {...eva} theme={eva.light}>
        <App />
    </ApplicationProvider>
);