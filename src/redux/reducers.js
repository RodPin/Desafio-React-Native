const INITIAL_STATE = {
  result: 0,
};

export function reset() {
  return {
    type: 'RESET',
  };
}

export function times(number) {
  return {
    type: 'TIMES_' + number,
  };
}

export default function Reducer(state = INITIAL_STATE, action) {
  const result = state.result;
  switch (action.type) {
    case 'TIMES_3':
      return {result: result == 0 ? 3 : result * 3};
    case 'TIMES_5':
      return {result: result == 0 ? 5 : result * 5};
    case 'RESET':
      return INITIAL_STATE;
    default:
      return state;
  }
}
