import LOGIN_DATA from '../sample/LoginData.json';
import PROFILE_RESPONSE from '../sample/LoginData.json';
import MY_PLAN_DATA from '../sample/MY/PlanData.json';
import EN_PLAN_DATA from '../sample/EN/PlanData.json';

export type AuthData = {
  sessionToken: string;
  accountNumber: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  message: string;
  status_code: number;
};

export type ProfileData = {
  accountNumber: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  message: string;
  status_code: number;
};

export type Plan = {
  product: { label: string, value: string}
  sumAssured: { label: string, value: number}
  payment: { label: string, value: string}
  age: { label: string, value: number}
  dob: { label: string, value: string}
  term: { label: string, value: number}
  description: { label: string, value: string}
}

export type Plans = { plans: Plan[]};

type Login = {
  sourceType: string;
  remoteUrl: string;
  requestMethod: 'POST';
  localData: AuthData;
};

type Profile = {
  sourceType: string;
  remoteUrl: string;
  requestMethod: 'POST';
  localData: ProfileData;
};

type PlanData = {
  sourceType: string;
  remoteUrl: string;
  requestMethod: 'POST';
  localDataEN: Plans;
  localDataMY: Plans;
};

type APIS = {
  login: Login;
  updateProfile: Profile;
  getPlan: PlanData;
};

export const SourceType = {
  remote: 'REMOTE',
  local: 'LOCAL',
};

export const apis: APIS = {
  login: {
    sourceType: SourceType.local,
    remoteUrl: 'http://myapiendpoint/users/login',
    requestMethod: 'POST',
    localData: LOGIN_DATA,
  },
  updateProfile: {
    sourceType: SourceType.local,
    remoteUrl: 'http://myapiendpoint/users/update_profile',
    requestMethod: 'POST',
    localData: PROFILE_RESPONSE,
  },
  getPlan: {
    sourceType: SourceType.local,
    remoteUrl: 'http://myapiendpoint/users/get_plan',
    requestMethod: 'POST',
    localDataEN: EN_PLAN_DATA,
    localDataMY: EN_PLAN_DATA,
  },
};
