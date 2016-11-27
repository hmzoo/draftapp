import {SIO_CONNECTION, SIO_SEND, SIO_SENDED} from '../actions/sio';

const initialState = {
    connected: false,
    socket: null,
    sendBuffer: []
};

let nextSendId = 0;

const sends = (state = [], action) => {

    switch (action.type) {
        case SIO_SEND:
            const send = {
                id: nextSendId++,
                channel: action.channel,
                datas: action.datas,
                infos: action.infos
            };
            return [
                ...state,
                send
            ];
        case SIO_SENDED:
            return state.filter(t => t.id !== action.id);
        default:
            return state

    }
}

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
            return Object.assign({}, state, {
                sendBuffer: sends(state.sendBuffer, action)
            });
        case SIO_SENDED:
            return Object.assign({}, state, {
                sendBuffer: sends(state.sendBuffer, action)
            });
        default:
            return state;
    }
}

export default sio;
