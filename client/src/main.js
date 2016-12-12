//import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware } from 'redux';
import style from './style.less';
import App from './app/App';

import reducer from './app/reducer';

let store = createStore(
  reducer
);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));
