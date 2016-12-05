import { PEERS_ADD,PEERS_DEL } from '../actions/peers';



const peer = (state = {}, action) => {

  switch (action.type) {
      case 'PEERS_ADD':
          return {id:action.id,peer:action.peer};

      case 'PEERS_DEL':;
          return state;

      default:
          return state
  }


}

export default function(state =[], action) {

    switch (action.type) {
        case PEERS_ADD:
            return [...state,peer(undefined,action)];
        case PEERS_DEL:
            return state.filter(t=>t.name!==action.name);

        default:
            return state
    }
}
