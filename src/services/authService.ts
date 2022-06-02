import {apis, SourceType, ProfileData, AuthData} from '../apis/API';


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
    }, 2000);
  });
};

const updateProfileByEmail = (email: string, name: string, phone: string): Promise<ProfileData> => {
  return new Promise((resolve) => {
    let response: ProfileData;
    setTimeout(() => {
      const { updateProfile } = apis
      const payload = JSON.stringify({ email, name, phone })
      if(updateProfile.sourceType === SourceType.local) {
        response = {...updateProfile.localData, email, name, phone}
      } else {
        console.log('call api endpoint with payload', payload)
      }
      resolve(response);
    }, 2500);
  });
};

export const authService = {
  signIn,
  updateProfileByEmail
};
