import React, {useState, useEffect} from 'react';
import { Alert, View, StyleSheet, Button, Text } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useDispatch } from 'react-redux';
import { saveQR } from '../redux/actions';
import { Ionicons } from '@expo/vector-icons';
import { readStyles } from './styles';


const ReadQR = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    dispatch(saveQR(data))
    Alert.alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }



    return (    
    
        <View style={readStyles.container}>
        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
        />
        <View style={readStyles.button}>
        {scanned ? <Button title={'Tap to Scan Again'} color='black' onPress={() => setScanned(false)} />
        : <Ionicons name="md-scan-outline" size={180} color='white'/>}
          </View> 
        </View>

    );
};



export default ReadQR;