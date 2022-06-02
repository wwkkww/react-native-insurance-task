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

const signIn = (email: string, _password: string): Promise<AuthData> => {
  return new Promise((resolve) => {
    let response: AuthData;
    setTimeout(() => {
      const { login } = apis
      if(login.sourceType === SourceType.local) {
        response = login.localData
      } else {
        console.log('call api endpoint')
      }
      resolve({...response});
    }, 1000);
  });
};

export const authService = {
  signIn,
};
