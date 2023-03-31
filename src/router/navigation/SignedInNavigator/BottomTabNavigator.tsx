import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from '@/components/Icon';
import Home from '@/screen/SignedIn/Home';
import Profile from '@/screen/SignedIn/Profile';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: () => <Icon icon="hacker" />,
                }}
            />
            <BottomTab.Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon: () => <Icon icon="money" />,
                }}
            />
        </BottomTab.Navigator>
    );
};

export default BottomTabNavigator;
