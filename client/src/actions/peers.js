export const PEERS_ADD = 'PEERS_ADD';
export const PEERS_DEL = 'PEERS_DEL';


export const addPeer = (id,peer) => ({type: PEERS_ADD, id: id,peer:peer});
export const delPeer = (id) => ({type: PEERS_DEL, id: id});
