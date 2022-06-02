import React from 'react';
import {View, TextInput, StyleSheet, Dimensions, Platform, Text} from 'react-native';

type Props = {
  title: string
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  disabled?: boolean;
  value?: string;
};

const Input: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        style={props.disabled? styles.disabled :  styles.textInput}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry || false}
        editable={!props.disabled || false}
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
    backgroundColor: '#FFCCBC'
    // backgroundColor: '#FCAF94',
    // backgroundColor: '#F3E4D4'
  },
  disabled: {
    borderRadius: 6,
    fontSize: 16,
    // color: '#8B8989',
    color: '#6C7B8B',
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    padding: 12,
    backgroundColor: '#FFCCBC'
    // backgroundColor: '#FCAF94',
    // backgroundColor: '#F3E4D4'
  },
  title: {
    marginBottom: 5,
    fontSize: 13,
    fontWeight: '600',
    color: '#330000'
  }
})