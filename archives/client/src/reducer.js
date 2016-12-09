import {combineReducers} from 'redux';
import profil from './profil/reducer';
import sio from './sio/reducer';
import devices from './devices/reducer';
import peers from './peers/reducer';

const rootReducer = combineReducers({profil, sio,devices,peers});

export default rootReducer;
