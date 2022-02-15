import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import Test from "../pages/Test";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeDrawerNavigation from "./HomeDrawerNavigation";
import Ionicons from 'react-native-vector-icons/AntDesign';
import LoginScreen from "../pages/auth/LoginScreen";
import Profile from "../pages/Profile";
import {useSelector} from "react-redux";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    const {isAuthenticated} = useSelector(state => state.authentication);
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        switch (route.name) {
                            case 'HomeDrawerNavigation':
                                iconName = 'home';
                                break;
                            case 'Test':
                                iconName = 'setting';
                                break;
                            case 'Login':
                                iconName = 'login';
                                break;
                            case 'Logout':
                                iconName = 'logout';
                                break;
                            case 'Profile':
                                iconName = 'user';
                                break;
                            default:
                                iconName = 'home';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}>
                <Tab.Screen options={{headerShown: false, title: "Home"}} name="HomeDrawerNavigation"
                            component={HomeDrawerNavigation}/>
                <Tab.Screen options={{headerShown: false}} name="Profile" component={Profile}/>
                <Tab.Screen name="Test" component={Test}/>
                {
                    isAuthenticated ?  <Tab.Screen options={{headerShown: false}} name="Logout" component={LoginScreen}/> :  <Tab.Screen options={{headerShown: false}} name="Login" component={LoginScreen}/>
                }
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigation;