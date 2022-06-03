export type UserInfo = {
  accountNumber: string;
  name: string;
  email: string;
  phone: string;
};

type Action =
  | {type: 'LOGIN'; payload: UserInfo}
  | {type: 'LOGOUT'; payload: {}};

const defaultState: UserInfo = {
  accountNumber: '',
  name: '',
  email: '',
  phone: '',
};

export default (state = defaultState, action: Action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        accountNumber: action.payload.accountNumber,
        name: action.payload.name,
        phone: action.payload.phone,
        email: action.payload.email,
      };
    case 'LOGOUT':
      return defaultState;
    default:
      return state;
  }
};
