import React from 'react';
import {Button, Text, View} from 'react-native';

import {styles} from '../theme/styles';
import {useAuth} from '../contexts/Auth';

const DashboardScreen = () => {
  const auth = useAuth();
  const signOut = () => {
    auth.signOut();
  };

  return (
    <View style={styles.container}>
      <Text>HOME SCREEN</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

export default DashboardScreen;