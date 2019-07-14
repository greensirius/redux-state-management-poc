type State = {
  username: string;
  password: string;
};

type Action = {
  type: string;
  value?: string;
};

let initialState: State = {
  username: '',
  password: ''
};

function inputReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.value
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        username: action.value
      };
    default:
      return state;
  }
}

export default inputReducer;
