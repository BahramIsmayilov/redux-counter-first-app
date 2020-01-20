import { DECREASE, INCREASE, RESET } from './action';

// setup initial state
const defaultStore = {
  count: 0,
  name: 'mekish'
};
export default function reducer(state = defaultStore, action) {
  switch (action.type) {
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}
