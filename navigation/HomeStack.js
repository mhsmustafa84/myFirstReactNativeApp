import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from './../screens/Details';

const { Screen, Navigator } = createStackNavigator();

export default function HomeStack() {
    return (
        <Navigator screenOptions={{ headerTitleAlign: "center" }}>
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="Details"
                component={Details}
            />
        </Navigator>
    );
}