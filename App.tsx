import React, {useEffect} from 'react';
import {Router} from './src/routes/Router';
import { Provider } from 'react-redux';
import Store from './src/store';
import {AuthProvider} from './src/contexts/Auth';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 2500)
  }, [])
  
  return (
    <Provider store={Store} >
      <AuthProvider>
        <Router />
      </AuthProvider>
    </Provider>
  );
};

export default App;