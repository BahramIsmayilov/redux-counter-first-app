import { SET_LOADING, GET_PRODUCTS } from './action';

// setup initial state
const defaultStore = {
  loading: false,
  products: []
};

export default function reducer(state = defaultStore, action) {
  if (action.type === SET_LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === GET_PRODUCTS) {
    return { ...state, loading: false, products: action.payload };
  }
  return state;
}
