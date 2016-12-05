import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import io from 'socket.io-client';

import sioMiddleWare from './middleware/sio';
import socketEvents from './socketevents';

import App from './App';
import './index.css';
import reducers from './reducers';

const socket = new io();


let store = createStore(
  reducers,
  applyMiddleware(thunk),
  applyMiddleware(sioMiddleWare(socket))
);


socketEvents(store.dispatch,socket)


ReactDOM.render(
    <Provider store={store}>
    <App/></Provider>, document.getElementById('root'));
