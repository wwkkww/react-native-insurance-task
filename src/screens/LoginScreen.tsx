import React, {useState} from 'react';
import {
  Text,
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useAuth} from '../contexts/Auth';
import Input from '../components/Input';
import Button from '../components/Button';
import Loader from '../components/Loader';

const LoginScreen: React.FC = () => {
  const [loading, isLoading] = useState(false);
  const [email, setEmail] = useState<string | undefined>('kevinwong@email.com');
  const [password, setPassword] = useState<string | undefined>('123456');

  const auth = useAuth();

  const onLogin = async () => {
    isLoading(true);
    if (email && password) {
      await auth.signIn(email, password);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        scrollEnabled={true}
        enableAutomaticScroll={true}
        style={{height: Dimensions.get('window').height}}>
        <ScrollView>
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
                title="Email"
                placeholder="Your email"
                onChangeText={val => setEmail(val)}
                value={email}
              />
              <Input
                title="Password"
                value={password}
                placeholder="Your password"
                onChangeText={val => setPassword(val)}
                secureTextEntry
              />
              <Button title="Sign in" onPress={onLogin} />
            </>
          )}
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
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
    marginTop: 20,
  },
});
