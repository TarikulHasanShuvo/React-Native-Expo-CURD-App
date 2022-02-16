import React                   from 'react';
import {useSelector}           from "react-redux";
import HomeScreen              from "../pages/HomeScreen";
import AddProduct              from "../pages/AddProduct";
import Todos                   from "../pages/Todos";
import LoginScreen             from "../pages/auth/LoginScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import VideoScreen             from "../pages/VideoScreen";

const Drawer = createDrawerNavigator();

const HomeDrawerNavigation = () => {
    const {isAuthenticated} = useSelector(state => state.authentication);

    const authScreen =
              <Drawer.Navigator initialRouteName="Home">
                  <Drawer.Screen name="Home" component={HomeScreen}/>
                  <Drawer.Screen name="Add Product" component={AddProduct}/>
                  <Drawer.Screen name="Video Screen" component={VideoScreen}/>
                  <Drawer.Screen name="Todos" component={Todos}/>
              </Drawer.Navigator>;

    const nonAuthScreen =
              <Drawer.Navigator initialRouteName="Login">
                  <Drawer.Screen options={{headerShown: false}} name="Login" component={LoginScreen}/>
              </Drawer.Navigator>;


    return (isAuthenticated ? authScreen : nonAuthScreen);
};

export default HomeDrawerNavigation;