import enumerateDevices from 'enumerate-devices';
import getUserMedia from 'getusermedia';

export const getVideoConstraints=(videoId) => {

    if (videoId == 'none') {
        return false;
    }
    let constraints = {
        mandatory: {
            minFrameRate: 30
        }
    }
    if (videoId) {
        constraints.mandatory.sourceId = videoId;
    }
    return constraints;

}

export const getAudioConstraints = (audioId)=> {

    if (audioId == 'none') {
        return false;
    }
    var constraints = {
        mandatory: {}
    }
    if (audioId) {
        constraints.mandatory.sourceId = audioId;
    }
    return constraints;

}




export const listDevices = (cb) => {

    let audioDevices = [];
    let videoDevices = [];
    enumerateDevices((err, devices) => {
        if (err) {
            console.log(err);
        } else {
            devices.map(function(device) {
                if (device.kind && device.kind === 'audioinput') {
                    audioDevices.push(device)
                }
                if (device.kind && device.kind === 'videoinput') {
                    videoDevices.push(device)
                }
                return
            });
            cb( videoDevices,audioDevices);

        }

    });
  }


  export const getSelfStream = (videoId,audioId,cb)=> {
    console.log(audioId);
    getUserMedia({
        video: getVideoConstraints(videoId),
        audio: getAudioConstraints(audioId)
    }, function(err, stream) {
        if (err) {
            console.log('failed to get a stream', err);
            cb(null);
        } else {
            console.log('got a stream', stream);
            cb(stream);
        }
    });

}
