import {newPeer} from '../controllers/ctlPeer';

export const PEERS_ADD = 'PEERS_ADD';
export const PEERS_DEL = 'PEERS_DEL';
export const PEER_SIGNAL = 'PEER_SIGNAL';

let nextId=1;
export const addPeer = (name,peer,init) => ({type: PEERS_ADD, id: nextId++,name:name,peer:peer,init:init});
export const delPeer = (name) => ({type: PEERS_DEL, name: name});

export const initPeer = (name) => {
  return (dispatch, getState)=>{
    newPeer(name,true,dispatch,(peer)=>{dispatch(addPeer(name,peer,true));})
  }
}
