import io from 'socket.io-client';
import {sioConnection,sioAskId, sioDelSended} from '../actions/sio';
import {setProfilName} from '../actions';

export default(store) => {

    const socket = new io();

    socket.on('connect', () => {
        console.log('Connected successfully to the socket.io server.');
        store.dispatch(sioConnection(socket));
        store.dispatch(sioAskId());
        socket.on('disconnect', (d) => {
            store.dispatch(sioConnection(null));
        });
        socket.on('youare', function(d) {
            if (!d || !d.user) {
                return;
            }
            store.dispatch(setProfilName(d.user));
        });
    });

    const handleChange = () => {
        let state = store.getState();
        if (!state || !state.sio || !state.sio.connected) {
            return;
        }
        const toBeSend = state.sio.sendBuffer;
        if (toBeSend.length > 0) {
            const send = toBeSend[0];
            socket.emit(send.channel, send.datas);
            store.dispatch(sioDelSended(send.id));
        }

    }

    store.subscribe(handleChange);
    

}
