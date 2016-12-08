
import { connect } from 'react-redux';
import Devices from './Devices';

import {getAllDevices,selectVideoId,selectAudioId} from './actions';


const mapStateToProps = (state) => {
    return {
        devices: state.devices
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        listDevices: () => {dispatch(getAllDevices())},
        selectVideoId: (id)=>{dispatch(selectVideoId(id))},
        selectAudioId: (id)=>{dispatch(selectAudioId(id))}
      }

}


export default connect(mapStateToProps, mapDispatchToProps)(Devices)
