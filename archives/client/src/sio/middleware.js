
import {SIO_SEND} from './actions';

const sioMiddleWare = socket => () => next => action => {
  console.log("SOCKET MDDW",action);
  if (action.sio && action.sio.channel && action.type===SIO_SEND) {
    console.log("SOCKET EMIT",action.sio.channel,action.sio.datas||{});
    socket.emit(action.sio.channel, action.sio.datas||{});
  }
  return next(action);
};

export default sioMiddleWare;
