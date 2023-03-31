import React, {useState, useEffect} from 'react';
import {DevSettings} from 'react-native';
import BottomTabNavigator from './navigation/SignedInNavigator/BottomTabNavigator';
import SignInNavigator from './navigation/SignInNavigator';

const Routes = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() =>
        DevSettings.addMenuItem('Change Routes', () =>
            setIsLoggedIn(old => !old),
        ),
    ),
        [];

    return isLoggedIn ? <BottomTabNavigator /> : <SignInNavigator />;
};
export default Routes;
