
import { DEVICES_LISTED } from '../actions/devices';

const initialState = {
  audioDevices: [],
  videoDevices:[],
  audioDeviceId:null,
  videoDeviceId:null,
  stream:null
};

export default function(state =initialState, action) {

    switch (action.type) {
        case DEVICES_LISTED:
            return Object.assign({}, state, {audioDevices:action.audioDevices,videoDevices:action.videoDevices});

        default:
            return state
    }
}
