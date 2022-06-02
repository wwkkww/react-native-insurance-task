import React, {useState} from 'react';
import {ActivityIndicator, Button, Text, View} from 'react-native';

import {styles} from '../theme/styles';
import {useAuth} from '../contexts/Auth';

export const LoginScreen = () => {
  const [loading, isLoading] = useState(false);
  const [email, setEmail] = useState('kevinwong@email.com')
  const [password, setPassword] = useState('123456')

  const auth = useAuth();

  const onLogin = async () => {
    isLoading(true);
    await auth.signIn(email, password);
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      {loading ? (
        <ActivityIndicator color={'#555'} animating={true} size="large" />
      ) : (
        <Button title="Login" onPress={onLogin} />
      )}
    </View>
  );
};
