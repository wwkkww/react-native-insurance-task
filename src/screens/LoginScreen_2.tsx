import React, {useState} from 'react';
import {
  Platform,
  ActivityIndicator,
  Button,
  Text,
  ViewComponent,
  StatusBar,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';
// import * as Animatable from 'react-native-animatable'
// import {styles} from '../theme/styles';
import {useAuth} from '../contexts/Auth';

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
    // <View style={styles.container}>
    //   <Text>Login</Text>
    //   {loading ? (
    //     <ActivityIndicator color={'#555'} animating={true} size="large" />
    //   ) : (
    //     <Button title="Login" onPress={onLogin} />
    //   )}
    // </View>

    <View style={styles.container}>
      <StatusBar backgroundColor="#e0115f" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
        <Text
          style={[
            styles.text_footer,
            {
              // color: colors.text,
              color: 'red',
            },
          ]}>
          Email
        </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Username"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                // color: colors.text,
                color: 'red',
              },
            ]}
            autoCapitalize="none"
            onChangeText={val => console.log("text changed")}
            // onEndEditing={e => handleValidUser(e.nativeEvent.text)}
            onEndEditing={e => console.log('validate input')}
          />
        </View>

        <Text
          style={[
            styles.text_footer,
            {
              // color: colors.text,
              color: 'red',
              marginTop: 35,
            },
          ]}>
          Password
        </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                // color: colors.text,
                color: 'red',
              },
            ]}
            autoCapitalize="none"
            onChangeText={val => console.log("password changed")}
          />
          {/* <TouchableOpacity onPress={updateSecureTextEntry}>

          </TouchableOpacity> */}
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={onLogin}>
            {/* <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Sign In
              </Text>
            </LinearGradient> */}
          </TouchableOpacity>

        </View>

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
