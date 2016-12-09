import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import io from 'socket.io-client';

import sioMiddleWare from './sio/middleware';
import socketEvents from './socketevents';

import App from './App';
import './index.css';
import reducer from './reducer';

const socket = new io();


let store = createStore(
  reducer,

  applyMiddleware(sioMiddleWare(socket)),
  applyMiddleware(thunk)
);


socketEvents(store.dispatch,socket)


ReactDOM.render(
    <Provider store={store}>
    <App/></Provider>, document.getElementById('root'));
