import React from 'react';
import {View, TextInput, StyleSheet, Dimensions, Platform} from 'react-native';

type Props = {
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  value?: string;
};

const Input: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry || false}
        value={props.value}
      />
    </View>
  );
};

export default Input;


const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#fffff',
    marginVertical: 8,
  },
  textInput: {
    borderRadius: 6,
    fontSize: 16,
    color: '#000',
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    padding: 12,
    // backgroundColor: '#FCAF94',
    // backgroundColor: '#F3E4D4'
    backgroundColor: '#FFCCBC'
  },
})