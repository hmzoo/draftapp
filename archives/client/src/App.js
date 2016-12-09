import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';

import Profil from './profil/Profil';
import Sio from './sio/Sio';
import CallInput from './peers/CallInput';
import Devices from './devices/DevicesContainer';
import Peers from './peers/PeersContainer';

import {initPeer} from './peers/actions';




class App extends Component {
  componentDidMount() {
    console.log(this.props);

  }


    render() {
        return (
            <div className="App">

              <Profil datas={this.props.profil}/>
              <Sio sio={this.props.sio}/>
              <CallInput onSubmit={this.props.tryACall}/>
              <Devices />
              <Peers />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      profil: state.profil,
      sio: state.sio,
      devices: state.devices
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        tryACall: (name)=>{dispatch(initPeer(name));}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
