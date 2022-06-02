import React, {useEffect, useState} from 'react';
import {
  Platform,
  ActivityIndicator,
  Text,
  Image,
  ListRenderItem,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../routes/AppStack';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootState} from '../store';
import {UserInfo} from '../store/reducers/LoginReducer';
import {AppInfo} from '../store/reducers/AppReducer';
import Button from '../components/Button';
import Loader from '../components/Loader';
import Input from '../components/Input';
import Signout from '../components/Signout';
import {getPlanByAccountNumber} from '../services/planService';
import {apis, SourceType, Plan, Plans} from '../apis/API';

const PlanInfoScreen = () => {
  const appInfo: AppInfo = useSelector((state: RootState) => state.AppInfo);
  const [data, setData] = useState<Plan | null>(null);
  const [user, setUser] = useState<UserInfo | null>(null);
  const route = useRoute<RouteProp<AppStackParamList, 'Plan'>>();

  useEffect(() => {
    if (route.params?.data) {
      setData(route.params.data);
    }
    if (route.params?.user) {
      setUser(route.params.user);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {appInfo.language == 'english' ? (
          <Text style={styles.textHeader}>Policy Details</Text>
        ) : (
          <Text style={styles.textHeader}>Polisi Deliti</Text>
        )}

        {user && <Text style={styles.textHeader}>{user.name}</Text>}
      </View>
      {data && (
        <ScrollView style={styles.column}>
          <View style={styles.row}>
            <Text style={styles.title}>{data.product.label}</Text>
            <Text style={styles.text}>{data.product.value}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>{data.term.label}</Text>
            <Text style={styles.text}>{data.term.value}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>{data.sumAssured.label}</Text>
            <Text style={styles.text}>{data.sumAssured.value}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>{data.payment.label}</Text>
            <Text style={styles.text}>{data.payment.value}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>{data.dob.label}</Text>
            <Text style={styles.text}>{data.dob.value}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>{data.age.label}</Text>
            <Text style={styles.text}>{data.age.value}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.desc}>{data.description.value}</Text>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default PlanInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  header: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    color: '#dd0000',
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 18,
  },
  column: {
    flexDirection: 'column',
    backgroundColor: '#F5D0C4',
    padding: 14,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    padding: 5,
    alignContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
    color: '#8B0000',
  },
  text: {
    fontSize: 14,
    color: '#000',
    fontWeight: '800',
    marginLeft: 10,
  },
  desc: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
});
