type LoginState = {
  accountNumber: string;
  name: string;
  email: string;
  phone: string;
}

type Action = { type: "login" ; payload: LoginState } | { type: "logout" ; payload: number }

const defaultState: LoginState = {
  accountNumber: "",
  name: "",
  email: "",
  phone: "",
};

export default (state = defaultState, action: Action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        name: action.payload.name,
        phone: action.payload.phone,
      }
    case "logout":
      return defaultState
    default:
      return state;
  }
};
