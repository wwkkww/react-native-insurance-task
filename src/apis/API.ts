const LOGIN_DATA = require('../sample/LoginData.json')

export type AuthData = {
  sessionToken: string;
  agentCode: string;
  role: string;
  name: string;
  status: string;
  message: string;
  status_code: number;
  email: string;
};

type Login = {
  sourceType: string,
  remoteUrl: string,
  requestMethod: "GET" | "POST",
  localData: AuthData,
}

type APIS = {
  login: Login
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
}