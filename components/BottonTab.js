import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native'
import ReadQR from './ReadQR';
import ListQR from './ListQR';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { tabStyles } from './styles';

const Tab = createBottomTabNavigator();


const BottonTab = () => {
    return (
        <Tab.Navigator screenOptions={{tabBarShowLabel: false, 
            tabBarStyle: [tabStyles.tabBar ,null],  headerShown: false}}
             >      
            <Tab.Screen name="Read QR"  component={ReadQR} 
            options={{tabBarIcon: ({focused})=> {
               return(
                    <MaterialCommunityIcons name="qrcode-scan" size={24} color="black" />
            )
            }}}
            style={tabStyles.tab}
            />      
            <Tab.Screen name="QR List" component={ListQR}    
            options={{tabBarIcon: ({focused})=> {
               return(
                <Feather name="list" size={24} color="black" />
            )
            }}}/>    
        </Tab.Navigator>
    );
};


export default BottonTab;


