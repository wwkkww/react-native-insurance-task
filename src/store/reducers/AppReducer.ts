type AppState = {
  theme: string;
  language: string;
};

const defaultState = {
  theme: 'light',
  language: 'english',
};

type Action =
  | {type: 'SET_LANGUAGE'; payload: AppState}
  | {type: 'TOGGLE_THEME'; payload: AppState};

export default (state = defaultState, action: Action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state, 
        language: action.payload.language
      };
    case 'TOGGLE_THEME':
      return {
        ...state, 
        theme: action.payload.theme
      };
    default:
      return state;
  }
};
