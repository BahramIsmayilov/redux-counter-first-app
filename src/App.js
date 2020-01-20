import React from 'react';
import Counter from './Counter';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// reducers
import countReducer from './countReducer';
import modalReducer from './modalReducer';
import productReducer from './productReducer';
// redux thunk
import thunk from 'redux-thunk';
// get components
import Modal from './Modal';
import Products from './Products';

const middleware = [thunk];

// setup store
const store = createStore(
  combineReducers({
    countState: countReducer,
    modalState: modalReducer,
    productState: productReducer
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

// console.log(store.getState());

const App = () => {
  return (
    <Provider store={store}>
      <Counter random="random value" />;
      <Modal />
      <Products />
    </Provider>
  );
};

export default App;
