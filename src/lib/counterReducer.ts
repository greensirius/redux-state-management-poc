type State = {
  counter: number;
};
type Action = {
  type: string;
  value?: number;
};

const initialState: State = {
  counter: 0
};

function counterReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return state;
  }
}

export default counterReducer;
