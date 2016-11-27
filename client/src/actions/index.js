import * as types from './types';


export function setProfilName(name){
  return {
    type: types.SET_PROFIL_NAME,
    profil:{name:name}
  };


}
