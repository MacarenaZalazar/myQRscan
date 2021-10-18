import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Button, Image} from 'react-native';
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
        <View style={listStyles.safeArea}>
            <View>
               <Text style={listStyles.text} >My QR</Text>
            </View>
            <Separator/>
            <View>
                <View style={listStyles.container} >
                    <TextInput style={listStyles.input} name={'filter'} value={input} placeholder={'key word...'} onChangeText={(val) => handleChange(val)} />
                    <Button  style={listStyles.button} color='black' disabled={input? false : true} title={'SEARCH'} onPress={handlePress} />
                    <View>
                </View>
            </View>
            <View style={listStyles.container}>
                    <Text style={listStyles.smallText} >or</Text>
                    <Button color='black' title={'SEE ALL'} onPress={handleAll} />
            </View>
                </View>
            <DisplayList flag={flag} list={filteredQRS} />
        </View>
    );
};





export default ListQR;