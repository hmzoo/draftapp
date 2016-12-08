import {listDevices,getSelfStream} from './helpers';

export const DEVICES_LISTED = 'DEVICES_LISTED';
export const DEVICES_SET_VIDEOID = 'DEVICES_SET_VIDEOID';
export const DEVICES_SET_AUDIOID = 'DEVICES_SET_AUDIOID';
export const DEVICES_SET_STREAM = 'DEVICES_SET_STREAM';

export const devicesListed = (videoDevices, audioDevices) => ({type: DEVICES_LISTED, videoDevices: videoDevices, audioDevices: audioDevices});

export const getAllDevices = ()=> dispatch => {
  listDevices((videoDevices,audioDevices)=>{
    dispatch(devicesListed(videoDevices, audioDevices))
  })

}


export const selectVideoId = (id) => {
  return (dispatch, getState)=>{
    dispatch(setVideoId(id));
    getSelfStream(getState().devices.videoDeviceId,getState().devices.audioDeviceId,(stream)=>{dispatch(setStream(stream))})
  }
}

export const selectAudioId = (id) => {
  return (dispatch, getState)=>{
    dispatch(setAudioId(id));
    getSelfStream(getState().devices.videoDeviceId,getState().devices.audioDeviceId,(stream)=>{dispatch(setStream(stream))})
  }
}


export const setVideoId = (id) => ({type: DEVICES_SET_VIDEOID, videoDeviceId: id});

export const setAudioId = (id) => ({type: DEVICES_SET_AUDIOID, audioDeviceId: id});

export const setStream = (stream) => ({
    type: DEVICES_SET_STREAM,
    stream: stream || null

});
