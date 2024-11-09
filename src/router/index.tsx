import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

import Home from "../pages/Home";
import Hero from "../pages/Hero";
import CreateAccount from "../pages/CreateAccount";
import Welcome from "../pages/Welcome";
import Account from "../pages/Account";
import SignIn from '../pages/SignIn';
import Verification from '../pages/Verification';

function Route(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Hero">
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                <Stack.Screen name="Hero" component={Hero} options={{headerShown: false}} />
                <Stack.Screen name="CreateAccount" component={CreateAccount} options={{headerShown: false}} />
                <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
                <Stack.Screen name="Verification" component={Verification} options={{headerShown: false}} />
                <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
                <Stack.Screen name="Account" component={Account} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Route;
