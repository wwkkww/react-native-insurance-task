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
import {createStackNavigator} from '@react-navigation/stack';
import DashboardScreen from '../screens/DashboardScreen';
import PlanInfoScreen from '../screens/PlanInfoScreen';
import SettingScreen from '../screens/SettingScreen';
import {Plan} from '../apis/API';
import {UserInfo} from '../store/reducers/LoginReducer';
import LanguageSelect from '../components/LanguageSelect';

export type AppStackParamList = {
  Dashboard: undefined;
  Plan: {data: Plan; user: UserInfo} | undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: 'Dashboard',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
          headerRight: () => (
            <LanguageSelect />
          ),
        }}
      />
      <Stack.Screen
        name="Plan"
        component={PlanInfoScreen}
        options={{
          title: 'Plan Info',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

