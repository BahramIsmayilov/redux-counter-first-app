import { MODAL_OPEN, MODAL_CLOSE } from './action';

// setup initial state
const defaultStore = {
  isOpen: false,
  name: '',
  text: ''
};

export default function reducer(state = defaultStore, action) {
  if (action.type === MODAL_OPEN) {
    return {
      ...state,
      isOpen: true,
      name: action.payload.name,
      text: action.payload.text
    };
  }
  if (action.type === MODAL_CLOSE) {
    return { ...state, isOpen: false, name: '', text: '' };
  }
  return state;
}
