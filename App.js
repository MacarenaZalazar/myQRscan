import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native'
import BottonTab from './components/BottonTab';
import { Provider } from 'react-redux';
import store from './redux/store';
import * as Font from 'expo-font';
import {AppLoading} from 'expo'

// const getFont = () =>{
//   return Font.loadAsync({
//     'OCRA-A-Std' : require('./assets/fonts/OCR A Std Regular.ttf')
//   })
// } 


export default function App() {
//  const [font, setFont] = useState(false)
//  if(!font){
//    return <AppLoading startAsync={getFont}
//    onFinish={()=> setFont(true)}
//    />
//  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottonTab/>
      </NavigationContainer>
    </Provider>
  );
}

