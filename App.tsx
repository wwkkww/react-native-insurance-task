import React, {useEffect} from 'react';
import {Router} from './src/routes/Router';
import {AuthProvider} from './src/contexts/Auth';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 2500)
  }, [])
  
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;