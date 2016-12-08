import {combineReducers} from 'redux';
import profil from '../profil/reducer';
import sio from './sio';
import devices from '../devices/reducer';
import peers from './peers';

const rootReducer = combineReducers({profil, sio,devices,peers});

export default rootReducer;
