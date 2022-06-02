import React from 'react'
import {ActivityIndicator} from 'react-native';

const Loader = () => {
  return (
    <ActivityIndicator style={{ flex: 1}}  color={'#800000'} animating={true} size="large" />
  )
}

export default Loader