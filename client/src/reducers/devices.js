
import { DEVICES_LISTED,DEVICES_SET_VIDEOID,DEVICES_SET_AUDIOID,DEVICES_SET_STREAM } from '../actions/devices';

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
        case DEVICES_SET_VIDEOID:
            return Object.assign({}, state, {videoDeviceId:action.videoDeviceId});
        case DEVICES_SET_AUDIOID:
            return Object.assign({}, state, {audioDeviceId:action.audioDeviceId});
        case DEVICES_SET_STREAM:
            return Object.assign({}, state, {stream:action.stream});
        default:
            return state
    }
}
