import React from 'react';
import { connect } from 'react-redux';
import Peers from '../components/Peers';




const mapStateToProps = (state) => {
    return {
        peers: state.peers
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

      }

}


export default connect(mapStateToProps, mapDispatchToProps)(Peers)
