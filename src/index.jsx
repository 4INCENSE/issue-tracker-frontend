import ReactDOM from 'react-dom';
import React from 'react';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import { checkboxReducer } from '@/redux/Main/reducers/checkboxReducer';

const rootElement = document.getElementById('root');

const rootReducer = combineReducers({
  checkboxReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk, logger)));

import(/*webpackChunkName: 'App' */ '@/App').then(({ default: App }) =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  )
);
