import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from '../pages/MainPage';
import NavigationPage from '../pages/NavigationPage';
import SearchPage from '../pages/SearchPage';
import SearchPage_2 from '../pages/SearchPage_2';
import NavigationRoutePage from '../pages/NavigationRoutePage';
import NavigationRoutePage_2 from '../pages/NavigationRoutePage_2';
import ServerTestPage from '../pages/ServerTestPage';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainPage"
                component={MainPage}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="NavigationPage"
                component={NavigationPage}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SearchPage"
                component={SearchPage}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SearchPage_2"
                component={SearchPage_2}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="NavigationRoutePage"
                component={NavigationRoutePage}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="NavigationRoutePage_2"
                component={NavigationRoutePage_2}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="ServerTestPage"
                component={ServerTestPage}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    );
};

export default StackNavigator;
