import {combineReducers} from 'redux';
import profil from './profil';
import sio from './sio';

const rootReducer = combineReducers({profil, sio});

export default rootReducer;
