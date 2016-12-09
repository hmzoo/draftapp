export const SIO_CONNECTION = 'SIO_CONNECTION';
export const SIO_SEND = 'SIO_SEND';
export const SIO_SENDED = 'SIO_SENDED';

export const sioConnection = (s = null) => ({
    type: SIO_CONNECTION,
    connected: s !== null,
    socket: s
});

export const sioTest = (data) => ({type: SIO_SEND, channel: 'test', data: data, infos: 'socket io test'});

export const sioAskId = () => ({
    type: SIO_SEND,
    sio: {
        channel: 'whoami',
        datas: {}
    }
});

export const sioPeerSignal = (to, signal) => ({
    type: SIO_SEND,
    sio: {
        channel: 'peersignal',
        datas: {
            to: to,
            signal: signal
        }
    }
});

export const sioDelSended = (id) => ({type: SIO_SENDED, id: id});
