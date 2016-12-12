export const ADD_ITEM = 'ADD_ITEM';

let nextId=1;

export const addItem=(text)=>(
  {type: ADD_ITEM,text:text,id:nextId++});
