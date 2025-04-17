import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from '../pages/MainPage';

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
        </Stack.Navigator>
    );
}

export default StackNavigator;
