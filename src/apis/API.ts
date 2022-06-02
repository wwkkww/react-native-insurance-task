const LOGIN_DATA = require('../sample/LoginData.json')
const PROFILE_RESPONSE = require('../sample/LoginData.json')

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

type Login = {
  sourceType: string,
  remoteUrl: string,
  requestMethod: "POST",
  localData: AuthData,
}

type Profile = {
  sourceType: string,
  remoteUrl: string,
  requestMethod: "POST",
  localData: ProfileData,
}

type APIS = {
  login: Login;
  updateProfile: Profile
}

export const SourceType = {
  remote: 'REMOTE',
  local: 'LOCAL',
};

export const apis:  APIS = {
  login: {
    sourceType: SourceType.local,
    remoteUrl: 'http://myapiendpoint/users/login',
    requestMethod: "POST",
    localData: LOGIN_DATA,
  },
  updateProfile: {
    sourceType: SourceType.local,
    remoteUrl: 'http://myapiendpoint/users/update_profile',
    requestMethod: "POST",
    localData: PROFILE_RESPONSE,
  }
}