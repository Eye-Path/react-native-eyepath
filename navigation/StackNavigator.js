import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
};

export default StackNavigator;

/*import React from 'react';
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

export default StackNavigator;*/

// App.js 또는 StackNavigator.js
/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TextInputSection from '../components/TextInputSection'; // 네비게이션이 발생할 컴포넌트
import SearchPage from '../screens/SearchPage'; // 이동할 페이지

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TextInputSection">
        <Stack.Screen name="TextInputSection" component={TextInputSection} />
        <Stack.Screen name="SearchPage" component={SearchPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}*/
