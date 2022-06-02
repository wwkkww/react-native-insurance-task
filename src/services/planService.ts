import {apis, SourceType, Plan, Plans} from '../apis/API';


export const getPlanByAccountNumber = (accountNumber: string, language: string = "english" ): Promise<Plan[]> => {
  return new Promise((resolve, reject ) => {
    let response: Plan[];
    setTimeout(() => {
      const { getPlan } = apis
      if(getPlan.sourceType === SourceType.local) {
        if (language === 'english') {
          response = getPlan.localDataEN.plans
        } else {
          response = getPlan.localDataMY.plans
        }

      } else {
        console.log('call getPlan api byy account number', accountNumber)
      }
      resolve(response);
    }, 2000);
  });
};


