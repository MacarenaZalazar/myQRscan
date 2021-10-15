import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native'
import ReadQR from './ReadQR';
import ListQR from './ListQR';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


const BottonTab = () => {
    return (
        <Tab.Navigator screenOptions={{tabBarShowLabel: false, 
            tabBarStyle: [{display: 'flex', position: 'absolute', bottom: 25, height: 60,
            left: 20,right: 20, borderRadius: 15 },null],  headerShown: false}}
             >      
            <Tab.Screen name="Read QR"  component={ReadQR} 
            options={{tabBarIcon: ({focused})=> {
               return(
                    <MaterialCommunityIcons name="qrcode-scan" size={24} color="black" />
            )
            }}}
            style={styles.tab}
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

const styles = StyleSheet.create({  
    container: {
        flex: 0,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'center',
      },
      input: {
        height: 40,
        width: 80,
        margin: 12,
        borderWidth: 1,
        borderColor:'grey',
        padding: 10,
      },
    button:{
        margin:10,
    },
    tab: {
        backgroundColor: '#a8b4a5',
    }}); 
export default BottonTab;


