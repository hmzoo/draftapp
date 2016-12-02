import {combineReducers} from 'redux';
import profil from './profil';
import sio from './sio';
import devices from './devices';

const rootReducer = combineReducers({profil, sio,devices});

export default rootReducer;
