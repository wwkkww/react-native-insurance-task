import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';

const LanguageSelect = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Alert.alert('click EN')}>
        <Text style={styles.text}> EN </Text>
      </TouchableOpacity>
      <Text style={styles.text}> | </Text>
      <TouchableOpacity onPress={() => Alert.alert('click MY')}>
        <Text style={styles.text}> MY </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguageSelect;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', marginRight: 10
  },
  btnContainer: {
    justifyContent: 'center',
    backgroundColor: '#f4511e',
    padding: 8,
    // paddingHorizontal: 38,
    borderRadius: 8,
    marginTop: 20
  },
  text: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '600'
  },
})