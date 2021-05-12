import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './../screens/Profile';
import HomeStack from './HomeStack';
import { Text } from 'react-native';
import { color } from 'react-native-reanimated';
import { FontAwesome } from '@expo/vector-icons';

const { Screen, Navigator } = createBottomTabNavigator();

export default function BottomTabs() {
    return (

        <Navigator tabBarOptions={{ style: { backgroundColor: "darkgray", paddingTop: 10, paddingBottom: 10, height: 60 } }}>
            <Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "red" : "blue" }}>Home</Text>,
                    tabBarIcon: ({ focused }) => <FontAwesome name="home" size={24} color={focused ? "red" : "blue"} />
                }}
            />
            < Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "red" : "blue" }}>Profile</Text>,
                    tabBarIcon: ({ focused }) => <FontAwesome name="user" size={24} color={focused ? "red" : "blue"} />
                }}
            />
        </Navigator >
    );
}