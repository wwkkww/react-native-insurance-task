import React, {useEffect, useState} from 'react';
import {
  Text,
  Image,
  ListRenderItem,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../routes/AppStack';
import {useNavigation} from '@react-navigation/native';
import {RootState} from '../store';
import {UserInfo} from '../store/reducers/LoginReducer';
import {AppInfo} from '../store/reducers/AppReducer';
import Button from '../components/Button';
import Loader from '../components/Loader';
import Signout from '../components/Signout';
import {getPlanByAccountNumber} from '../services/planService';
import {Plan, Plans} from '../apis/API';

type DashboardScreenProp = StackNavigationProp<AppStackParamList, 'Dashboard'>;

const DashboardScreen = () => {
  const userInfo: UserInfo = useSelector((state: RootState) => state.UserInfo);
  const appInfo: AppInfo = useSelector((state: RootState) => state.AppInfo);
  const [loading, isLoading] = useState(true);
  const [plans, setPlans] = useState<Plan[] | null>(null);
  const navigation = useNavigation<DashboardScreenProp>();

  useEffect(() => {
    let mounted = true;
    getPlanByAccountNumber(userInfo.accountNumber, appInfo.language).then(
      data => {
        if (mounted) {
          setPlans(data);
        }
        isLoading(false);
      },
    );

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    console.log('language effect', appInfo);
    isLoading(true);
    let mounted = true;
    getPlanByAccountNumber(userInfo.accountNumber, appInfo.language).then(
      data => {
        if (mounted) {
          setPlans(data);
        }
        isLoading(false);
      },
    );

    return () => {
      mounted = false;
    };
  }, [appInfo.language]);

  useEffect(() => {}, [appInfo.theme]);

  const loadPlan = () => {};

  const renderPlanRow: ListRenderItem<Plan> = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Plan', {data: item, user: userInfo})
        }>
        <View style={styles.column}>
          <View style={styles.row}>
            <Text style={styles.title}>{item.product.label}: </Text>
            <Text style={styles.title}>{item.product.value}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>{item.sumAssured.label}: </Text>
            <Text style={styles.title}>{item.sumAssured.value}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>{item.description.value}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {appInfo.language == 'english' ? (
          <Text style={styles.textHeader}>
            {userInfo.name} Policy Summary 
          </Text>
        ) : (
          <Text style={styles.textHeader}>
            {userInfo.name} Ringkasan Polisi 
          </Text>
        )}
      </View>
      {loading ? (
        <Loader />
      ) : plans && plans.length > 0 ? (
        <FlatList
          data={plans}
          renderItem={renderPlanRow}
          keyExtractor={item => item.product.value}
        />
      ) : (
        <Text style={styles.title}>No policy found! </Text>
      )}

      <Button
        title={appInfo.language == 'english' ? "Settings" : "Tetapan"}
        onPress={() => navigation.navigate('Settings')}
      />
      <Signout />
    </SafeAreaView>
  );
};

export default DashboardScreen;

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
    backgroundColor: '#F5D0C4',
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
    fontSize: 14,
    fontWeight: '800',
  },
  text: {
    fontSize: 14,
    color: '#000',
  },
});
