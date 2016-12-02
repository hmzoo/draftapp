import React, {Component} from 'react';

export default class Devices extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
      const devices= this.props.devices;
        return (
            <div >
                audio device ID: {devices.audioDeviceId}<br/>
                video device ID : {devices.videoDeviceId}<br/> {devices.audioDevices.map(d => (
                    <div key={d.id} className='box /3/12 fl'>
                        <b>{d.id}</b>
                    </div>
                ))}

                {devices.videoDevices.map(d => (
                    <div key={d.id} className='box /3/12 fl'>
                        <b>{d.id}</b>
                    </div>
                ))}

            </div>
        )
    }
}
