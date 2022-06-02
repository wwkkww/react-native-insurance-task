import {apis, SourceType} from '../apis/API';

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

const signIn = (email: string, password: string): Promise<AuthData> => {
  return new Promise((resolve) => {
    let response: AuthData;
    setTimeout(() => {
      const { login } = apis
      const payload = JSON.stringify({ email, password })
      if(login.sourceType === SourceType.local) {
        response = login.localData
      } else {
        console.log('call api endpointwith payload', payload)
      }
      resolve({...response});
    }, 2500);
  });
};

export const authService = {
  signIn,
};
