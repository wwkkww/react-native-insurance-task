import React from 'react'
import Button from './Button';
import {useAuth} from '../contexts/Auth';
import {AppInfo} from '../store/reducers/AppReducer';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const Signout = () => {
  const appInfo: AppInfo = useSelector((state: RootState) => state.AppInfo);
  const auth = useAuth();
  const signOut = () => {
    auth.signOut();
  };

  return (
    <Button title={appInfo.language == 'english' ? "Sign Out" : "Log Keluar"} onPress={signOut} />
  )
}

export default Signout