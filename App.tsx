import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/home';
import ProfileScreen from './screens/profile';


function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName="Home"
       screenOptions={
        {
          headerShown: false
        }
       }
       >
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
        name='Profile'
        component={ProfileScreen}
        options={{title: 'Profile Screen'}}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
