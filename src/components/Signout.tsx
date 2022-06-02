import React from 'react'
import Button from './Button';
import {useAuth} from '../contexts/Auth';

const Signout = () => {
  const auth = useAuth();
  const signOut = () => {
    auth.signOut();
  };

  return (
    <Button title="Sign Out" onPress={signOut} />
  )
}

export default Signout