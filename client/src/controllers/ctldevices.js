import enumerateDevices from 'enumerate-devices';
import getUserMedia from 'getusermedia';

import {devicesListed} from '../actions/devices';

export const listDevices = (store) => {

    let audioDevices = [];
    let videoDevices = [];
    enumerateDevices().then(function(result) {

        result.map(function(device) {

            if (device.kind && device.kind === 'audioinput') {
                audioDevices.push(device)
            }

            if (device.kind && device.kind === 'videoinput') {
                videoDevices.push(device)
            }

        });

        store.dispatch(devicesListed(audioDevices, videoDevices));

    }).catch(function(raison) {
        console.log(raison);
    });

}
