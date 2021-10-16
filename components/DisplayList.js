import React from 'react';
import { SafeAreaView, FlatList, Text, View } from 'react-native';
import {RenderItem} from './utils.js'
import { displayStyles } from "./styles";



const DisplayList = ({list, flag}) => {

    return (
        <View style={displayStyles.bigContainer}>
            <SafeAreaView style={displayStyles.container} >
                 { (flag) ? list.length > 0 ? <FlatList keyExtractor={item => item+'k'} data={list} renderItem={RenderItem} /> : 
                <View style={displayStyles.textContainer} ><Text>No QRs where found</Text></View> : null}
            </SafeAreaView>
        </View>
    );
};


export default DisplayList;