import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Alert,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../routes/AppStack';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../contexts/Auth';
import {RootState} from '../store';
import {UserInfo} from '../store/reducers/LoginReducer';
import {AppInfo} from '../store/reducers/AppReducer';
import Button from '../components/Button';
import Input from '../components/Input';
import Signout from '../components/Signout';

type SettingScreenProp = StackNavigationProp<AppStackParamList, 'Settings'>;

const SettingScreen = () => {
  const userInfo: UserInfo = useSelector((state: RootState) => state.UserInfo);
  const [name, setName] = useState<string | undefined>();
  const [phone, setPhone] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [accountNumber, setAccountNumber] = useState<string | undefined>();
  const navigation = useNavigation<SettingScreenProp>();
  const auth = useAuth();

  useEffect(() => {
    if (userInfo && userInfo.name && userInfo.phone && userInfo.email && userInfo.accountNumber) {
      setName(userInfo.name);
      setPhone(userInfo.phone);
      setEmail(userInfo.email);
      setAccountNumber(userInfo.accountNumber);
    }
    console.log(userInfo);
  }, []);

  const saveProfile = () => {
    if (email && name && phone) {
      auth.updateProfile(email, name, phone);
      Alert.alert('Profile updated 👍', '', [
        {text: 'OK', onPress: () => navigation.navigate('Dashboard')},
      ]);
    } else {
      Alert.alert('Please enter a value ❗');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        scrollEnabled={true}
        enableAutomaticScroll={true}
        style={{height: Dimensions.get('window').height}}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Profile</Text>
        </View>
        <ScrollView style={styles.column}>
          <>
            <Input
              title="Account number"
              placeholder=""
              onChangeText={() => {}}
              value={accountNumber}
              disabled={true}
            />
            <Input
              title="Email"
              placeholder=""
              onChangeText={() => {}}
              value={email}
              disabled={true}
            />
            <Input
              title="Name"
              placeholder="Your name"
              onChangeText={val => setName(val)}
              value={name}
            />
            <Input
              title="Phone"
              value={phone}
              placeholder="Your phone number"
              onChangeText={val => setPhone(val)}
            />
          </>
        </ScrollView>
        <Button title="Save profile" onPress={saveProfile} />
        <Signout />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  header: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  textHeader: {
    color: '#dd0000',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  column: {
    flexDirection: 'column',
    backgroundColor: '#F4F4F4',
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    padding: 5,
  },
  title: {
    fontSize: 12,
    fontWeight: '800',
  },
  text: {
    fontSize: 10,
    color: '#000',
  },
});
