import React, {Component} from 'react';

export default class Devices extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {}
    }



    componentWillMount() {
        this.props.listDevices();
    }

    componentDidUpdate() {
        //  console.log("video_self didupdate", this.props.stream)
        const stream = this.props.devices.stream;
        if (stream) {

            document.getElementById('video_self').srcObject = stream;
            setTimeout(function() {
                document.getElementById('video_self').muted = true;
                document.getElementById('video_self').play();
            }, 150);
        } else {
            document.getElementById('video_self').pause();
        }
    }

    render() {
        const {devices, selectVideoId, selectAudioId} = this.props;

        return (
            <div >
              audio device ID: {devices.audioDeviceId}<br/>
              video device ID : {devices.videoDeviceId}<br/>
              <h3>AUDIO</h3>
              {devices.audioDevices.map(d => (
                <div key={d.deviceId} className='box /3/12 fl' onClick={() => selectAudioId(d.deviceId)}>
                  {d.label}
                  :<i>{d.deviceId}</i>
                </div>
              ))}
              <h3>VIDEO</h3>
                {devices.videoDevices.map(d => (
                    <div key={d.deviceId} className='box /3/12 fl' onClick={() => selectVideoId(d.deviceId)}>
                        {d.label}
                        :<i>{d.deviceId}</i>
                    </div>
                ))}
                <video className='selfVideo' id='video_self'></video>
            </div>
        )
    }
}
