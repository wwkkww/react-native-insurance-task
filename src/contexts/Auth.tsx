import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthData, authService} from '../services/authService';

type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  signIn(email: string, password:string): Promise<void>;
  signOut(): void;
};

const AUTH_DATA_KEY = '@@AuthData'

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await AsyncStorage.getItem(AUTH_DATA_KEY);
      if (authDataSerialized) {
        const _authData: AuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
      console.log('error', JSON.stringify(error))
    } finally {
      setLoading(false);
    }
  }

  const signIn = async (email: string, password: string) => {
    const _authData = await authService.signIn(email, password );
    console.log('login success', _authData)
    if(_authData.status === 'success') {
      setAuthData(_authData);
    } 
    AsyncStorage.setItem(AUTH_DATA_KEY, JSON.stringify(_authData));
  };

  const signOut = async () => {
    setAuthData(undefined);
    await AsyncStorage.removeItem(AUTH_DATA_KEY);
  };

  return (
    <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};


// check is component allow accesss to the AuthContext & subscribe AuthContext updates
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export {AuthContext, AuthProvider, useAuth};
