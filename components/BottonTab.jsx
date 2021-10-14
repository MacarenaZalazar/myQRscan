import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReadQR from './ReadQR';
import ListQR from './ListQR';

const Tab = createBottomTabNavigator();


const BottonTab = () => {
    return (
        <Tab.Navigator>      
            <Tab.Screen name="Read QR"  component={ReadQR} />      
            <Tab.Screen name="QR List" component={ListQR} />    
        </Tab.Navigator>
    );
};

export default BottonTab;

