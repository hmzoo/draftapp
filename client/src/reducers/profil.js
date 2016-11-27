//Profil reducer

import { SET_PROFIL_NAME } from '../actions/types';

const initialState = {
  name: ''
};

export default function(state =initialState, action) {

    switch (action.type) {
        case 'SET_PROFIL_NAME':
            return Object.assign({}, state, action.profil);

        default:
            return state
    }
}
