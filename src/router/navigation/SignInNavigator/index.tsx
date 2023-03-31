import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Access from '@/screen/SignIn/Access';
import Login from '@/screen/SignIn/Login';
import Onboarding from '@/screen/SignIn/Onboarding';
import SignUp from '@/screen/SignIn/SignUp';

const Stack = createStackNavigator<SignInStackParamList>();

const SignInNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="onBoarding" component={Onboarding} />
            <Stack.Screen name="access" component={Access} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signUp" component={SignUp} />
        </Stack.Navigator>
    );
};

export default SignInNavigator;
