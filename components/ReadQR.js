import React, {useState, useEffect} from 'react';
import { Alert, View, StyleSheet, Button, Text, Platform } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useDispatch } from 'react-redux';
import { saveQR } from '../redux/actions';
import { Ionicons } from '@expo/vector-icons';
import { readStyles } from './styles';
import { useSelector } from 'react-redux';


const ReadQR = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const dispatch = useDispatch()
    const {allQRS} = useSelector(state => state)
    const allowCameraPermition = () => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }
    useEffect(() => {
      allowCameraPermition()
    }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    dispatch(saveQR(data))
    if(allQRS.includes(data)){
      return Alert.alert('This bar code has already been scanned, see your list!')
    }
    Alert.alert(`Bar code with ${data} has been scanned!`);
  };
  if (hasPermission === null) {
    return (
    <View style={readStyles.loading} >
      <Text style={{alignSelf:'center'}}>Requesting for camera permission</Text>
    </View>
    )
  }
  if (hasPermission === false) {
    return (
    <View style={readStyles.loading} >
      <Text style={{alignSelf:'center', fontSize: 25, marginBottom: 15}}>No access to camera</Text>
      <View style={readStyles.button}>
        <Button color={ Platform.OS === 'ios' ? 'white' :'black'} title={'Allow Camera'} onPress={()=> allowCameraPermition()} />
      </View>
    </View>
    )
  }

    return (    
    
        <View style={readStyles.container}>
        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
        />
        <View style={readStyles.button}>
        {scanned ? <Button title={'Tap to Scan Again'} color={ Platform.OS === 'ios' ? 'white' :'black'} onPress={() => setScanned(false)} />
        : <Ionicons name="md-scan-outline" size={200} color='white' />}
          </View> 
        </View>

    );
};



export default ReadQR;