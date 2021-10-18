import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native'
import BottonTab from './components/BottonTab';
import { Provider } from 'react-redux';
import store from './redux/store';



export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottonTab/>
      </NavigationContainer>
    </Provider>
  );
}

