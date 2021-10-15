import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Button, SafeAreaView} from 'react-native';
import {filterQR} from '../redux/actions';
import {useSelector, useDispatch} from 'react-redux'
import DisplayList from './DisplayList';
import { Separator } from './utils';
import { listStyles } from './styles';


const ListQR = () => {
    const [input, setInput] = useState('')
    const {filteredQRS} = useSelector(state => state)
    const [flag, setFlag] = useState(false)
    const dispatch = useDispatch()

    useEffect(()=>{
        setFlag(false)
    }, [])

    const handleChange = (val) => {
        setInput(val.toLowerCase())
    }
    const handlePress = (e) => {
        e.preventDefault()
        dispatch(filterQR(input))
        setInput('')
        setFlag(true)
    }
   
    const handleAll = () => {
        dispatch(filterQR())
        setFlag(true)
    }

    return (
        <SafeAreaView style={listStyles.safeArea}>
            <View>
                <Text style={listStyles.text} >Your QR List</Text>
            </View>
            <Separator/>
            <View style={listStyles.container} >
            <View style={listStyles.formContainer} >
                <TextInput style={listStyles.input} name={'filter'} value={input} placeholder={'search QR'} onChangeText={(val) => handleChange(val)} />
                <View style={listStyles.button} >
                    <Button  style={listStyles.button} color='black' disabled={input? false : true} title={'SEARCH'} onPress={handlePress} />
                </View>
            </View>
                <Button color='black' title={'SEE ALL'} onPress={handleAll} />
            </View>
        <DisplayList flag={flag} list={filteredQRS} />
        </SafeAreaView>
    );
};





export default ListQR;