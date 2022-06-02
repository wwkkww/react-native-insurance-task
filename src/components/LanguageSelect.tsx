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
import {useDispatch, useSelector} from 'react-redux';
import { setLanguage } from '../store/actions/AppSettingAction';


const LanguageSelect = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(setLanguage({ language: "english"}))}>
        <Text style={styles.text}> EN </Text>
      </TouchableOpacity>
      <Text style={styles.text}> | </Text>
      <TouchableOpacity onPress={() => dispatch(setLanguage({ language: "malay"}))}>
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