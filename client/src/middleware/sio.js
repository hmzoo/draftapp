
import {SIO_SEND} from '../actions/sio';

const sioMiddleWare = socket => () => next => action => {
  if (action.sio && action.sio.channel && action.type===SIO_SEND) {
    socket.emit(action.sio.channel, action.sio.datas||{});
  }
  return next(action);
};

export default sioMiddleWare;
