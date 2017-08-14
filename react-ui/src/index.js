import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'


import AdminReducer from './reducers/admin';
import './stylesheets/index.css';
import './stylesheets/buttons.css';

import {initialUser, initialEdit, initialMessage, data } from '../../data/data';
//=============================================================\
const initialSaved = {
  edit: initialEdit,
  message: initialMessage,
  user: initialUser
}

// const initialState = {
//   ...initialSaved,
//   rate: data
// };

const saveState = (state) => {
  try {
    // if(state.message.error !== "Session expired. Log back in again to continue."){
      const serializedState = JSON.stringify({edit: state.edit, message: state.message, user: state.user});
      localStorage.setItem('patty', serializedState);
    // }
    // else { //do not save session if logged out
    //   const serializedInitial = JSON.stringify(initialSaved);
    //   localStorage.setItem('patty', serializedInitial);
    // }
  }
  catch(err){

  }
};

// const storage = JSON.parse(localStorage.patty);
const initial = (localStorage.patty !== undefined) ? JSON.parse(localStorage.patty) : initialSaved;

const store = createStore(
  AdminReducer, {...initial, rate: data}, applyMiddleware(thunk)
);

store.subscribe(() => { saveState(store.getState()); });


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
