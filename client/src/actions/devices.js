export const DEVICES_LIST = 'DEVICES_LIST';
export const DEVICES_LISTED = 'DEVICES_LISTED';
export const DEVICES_SELECT_VIDEO = 'DEVICES_SELECT_VIDEO';
export const DEVICES_SELECT_AUDIO = 'DEVICES_SELECT_AUDIO';
export const DEVICES_STREAM = 'DEVICES_STREAM';

export const devicesList = () => {
  const list = function() {
          let audioDevices = [];
          let videoDevices = [];
          enumerateDevices().then(function(result) {

              result.map(function(device) {

                  if (device.kind && device.kind == 'audioinput') {
                      audioDevices.push(device)
                  }
                  
                  if (device.kind && device.kind == 'videoinput') {
                      videoDevices.push(device)
                  }

              });

          }).catch(function(raison) {
              console.log(raison);
          });
      }

}




({
    type: DEVICES_LIST
});

export const devicesListed = (video,audio) => ({
    type: DEVICES_LISTED,
    videoDevices:video,
    audioDevices:audio
});

export const devicesSelectVideo = (id) => ({
    type: DEVICES_SELECT_VIDEO,
    videoDevice:id
});

export const devicesSelectAudio = (id) => ({
    type: DEVICES_SELECT_AUDIO,
    audioDevice:id
});

export const devicesStream = (stream) => ({
    type: DEVICES_STREAM,
    stream:stream||null,
    streaming:stream?true:false
});
