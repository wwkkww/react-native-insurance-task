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
} from 'react-native';
import {useSelector} from 'react-redux';
// import {styles} from '../theme/styles';s
import {useAuth} from '../contexts/Auth';
import {RootState} from '../store';
import {UserInfo} from '../store/reducers/LoginReducer';
import {AppInfo} from '../store/reducers/AppReducer';
import Button from '../components/Button';
import Loader from '../components/Loader';
import {getPlanByAccountNumber} from '../services/planService';
import {apis, SourceType, Plan, Plans} from '../apis/API';

const DashboardScreen = (props: any) => {
  const userInfo: UserInfo = useSelector((state: RootState) => state.UserInfo);
  const appInfo: AppInfo = useSelector((state: RootState) => state.AppInfo);
  const [loading, isLoading] = useState(true);
  const [plans, setPlans] = useState<Plan[] | null>(null);

  const auth = useAuth();
  const signOut = () => {
    auth.signOut();
  };

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
    if (plans) {
      console.log('plans', JSON.stringify(plans));
    }
  }, [plans]);

  const renderPlanRow: ListRenderItem<Plan> = ({item}) => {
    return (
      <View style={styles.column}>
        <View style={styles.row}>
          <Text style={styles.title}>{item.product.label}: </Text>
          <Text style={styles.title}>{item.product.value}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{item.description.value}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>
          Policy Summary for {userInfo.name}
        </Text>
      </View>
      {loading ? (
        <Loader/>
      ) : plans && plans.length > 0 ? (
        <FlatList
          data={plans}
          renderItem={renderPlanRow}
          keyExtractor={item => item.product.value}
        />
      ) : (
        <Text style={styles.title}>No policy found! </Text>
      )}
      {/* {!loading ? (
        plans && plans.length > 0 ? (
          <FlatList
            data={plans}
            renderItem={renderPlanRow}
            keyExtractor={item => item.product.value}
          />
        ) : (
          <Text style={styles.title}>No policy found! </Text>
        )
      ) : null} */}

      {/* <Button
        title="Plan Details"
        onPress={() => props.navigation.navigate('Plan')}
      /> */}
      <Button
        title="Settings"
        onPress={() => props.navigation.navigate('Settings')}
      />
      <View style={styles.logout}>
        <Button title="Sign Out" onPress={signOut} />
      </View>
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
    backgroundColor: '#f9c2ff',
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
  logout: {
    // position: 'absolute',
    // bottom: 80,
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignSelf: 'center',
    // width: '90%',
    // backgroundColor: '#f4511e',
    // // padding: 12,
    // borderRadius: 8,
  },
});
