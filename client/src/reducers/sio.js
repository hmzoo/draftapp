import {SIO_CONNECTION, SIO_SEND, SIO_SENDED} from '../actions/sio';

const initialState = {
    connected: false,
    socket: null
};



const sio = (state = initialState, action) => {

    switch (action.type) {
        case SIO_CONNECTION:
            let infos = action.connected
                ? 'Connected'
                : 'Not connected';
            return Object.assign({}, state, {
                connected: action.connected,
                socket: action.socket,
                infos: infos
            });
        case SIO_SEND:
        console.log(SIO_SEND,action);
            return state;
        case SIO_SENDED:
            return state;
        default:
            return state;
    }
}

export default sio;
