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
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import DashboardScreen from '../screens/DashboardScreen';
import PlanInfoScreen from '../screens/PlanInfoScreen';
import SettingScreen from '../screens/SettingScreen';
import {Plan} from '../apis/API';
import {UserInfo} from '../store/reducers/LoginReducer';
import {AppInfo} from '../store/reducers/AppReducer';
import LanguageSelect from '../components/LanguageSelect';

export type AppStackParamList = {
  Dashboard: undefined;
  Plan: {data: Plan; user: UserInfo} | undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

export const AppStack = () => {
  const appInfo: AppInfo = useSelector((state: RootState) => state.AppInfo);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: appInfo.language == 'english' ? 'Dashboard' : 'Papan Pemuka',
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
          title: appInfo.language == 'english' ? 'Plan Info' : 'Pelan Info',
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
        name="Settings"
        component={SettingScreen}
        options={{
          title: appInfo.language == 'english' ? 'Settings' : 'Tetapan',
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
    </Stack.Navigator>
  );
};

