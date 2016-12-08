import {sioConnection, sioAskId} from './actions/sio';
import {setProfilName} from './actions';
import {peerSignal} from './actions/peers';

const socketEvents = (dispatch, socket) => {
    socket.on('connect', () => {
        console.log('Connected successfully to the socket.io server.');
        dispatch(sioConnection(socket));
        dispatch(sioAskId());

        socket.on('disconnect', (d) => {
            dispatch(sioConnection(null));
        });

        socket.on('youare', (d) => {
            if (!d || !d.user) {
                return;
            }
            dispatch(setProfilName(d.user));
        });

        socket.on('peersignal', (d) => {
            if (!d || !d.from || !d.content) {
                return;
            }
            dispatch(peerSignal(d.from, d.content));

        });

    });
}

export default socketEvents;
