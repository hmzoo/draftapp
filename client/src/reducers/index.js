import {combineReducers} from 'redux';
import profil from './profil';
import sio from './sio';
import devices from './devices';
import peers from './peers';

const rootReducer = combineReducers({profil, sio,devices,peers});

export default rootReducer;
