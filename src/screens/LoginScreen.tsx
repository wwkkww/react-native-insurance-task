import React, {useState} from 'react';
import {
  Platform,
  ActivityIndicator,
  Text,
  Image,
  StatusBar,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import {styles} from '../theme/styles';
import {useAuth} from '../contexts/Auth';
import Input from '../components/Input';
import Button from '../components/Button';
import Loader from '../components/Loader';

const LoginScreen: React.FC = () => {
  const [loading, isLoading] = useState(false);
  const [email, setEmail] = useState('kevinwong@email.com');
  const [password, setPassword] = useState('123456');

  const [data, setData] = useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const auth = useAuth();

  const onLogin = async () => {
    isLoading(true);
    await auth.signIn(email, password);
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      scrollEnabled={false}
      style={{height: Dimensions.get('window').height}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>WELCOME</Text>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
        </View>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Input
              placeholder="Email"
              onChangeText={val => setEmail(val)}
              value={email}
            />
            <Input
              value={password}
              placeholder="Password"
              onChangeText={val => setPassword(val)}
              secureTextEntry
            />
            <Button title="Sign in" onPress={onLogin} />
          </>
        )}
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  header: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 26,
  },
  textHeader: {
    color: '#dd0000',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 30,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20
  },
});
