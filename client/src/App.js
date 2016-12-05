import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';

import Profil from './components/Profil';
import SocketState from './components/SocketState';
import CallInput from './components/CallInput';
import Devices from './containers/DevicesContainer';
import Peers from './containers/PeersContainer';

import {addPeer} from './actions/peers';




class App extends Component {
  componentDidMount() {
    console.log(this.props);

  }


    render() {
        return (
            <div className="App">

              <Profil datas={this.props.profil}/>
              <SocketState sio={this.props.sio}/>
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
        tryACall: (name)=>{dispatch(addPeer(name,null));}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
