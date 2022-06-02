import React from 'react'
import {View, Text, StyleSheet, Dimensions, Platform, TouchableOpacity} from 'react-native';

type Props = {
  title: string;
  onPress: () => void
}

const Button: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#f4511e',
    padding: 12,
    // paddingHorizontal: 38,
    borderRadius: 8,
    marginTop: 20
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '800'
  },
})