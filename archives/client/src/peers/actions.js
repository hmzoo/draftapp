import {newPeer} from './ctlPeer';

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

export const acceptPeer = (name) => {
  return (dispatch, getState)=>{
    newPeer(name,false,dispatch,(peer)=>{dispatch(addPeer(name,peer,false));})
  }
}

export const peerSignal =(from,signal) =>{
  return (dispatch, getState)=>{
    let peers=getState().peers.filter(t=>t.name===from);
    console.log(peers);
    if(peers.length===0){
      newPeer(from,false,dispatch,(peer)=>{
        dispatch(addPeer(from,peer,false));
        //dispatch(peerSignal(from,signal));
      })
    }else{
      let peer=peers[0];
      peer.peer.signal(signal);
    }


  }


}
