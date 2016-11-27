import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';

import Profil from './components/Profil';
import SocketState from './components/SocketState';
import CallInput from './components/CallInput';

import {sioTest} from './actions/sio';

class App extends Component {
    render() {
        return (
            <div className="App">

                <Profil datas={this.props.profil}/>
              <SocketState sio={this.props.sio}/>
                <CallInput onSubmit={this.props.tryACall}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      profil: state.profil,
      sio: state.sio
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        tryACall: (name)=>{dispatch(sioTest({name:name}));}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
