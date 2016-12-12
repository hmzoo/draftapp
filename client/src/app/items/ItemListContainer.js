import { connect } from 'react-redux'
import React, {PropTypes} from 'react'
import  ItemList from './ItemList'

import {addItem} from './actions'


const mapStateToProps = (state)=>{
  console.log(state);
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem:(text) => {
      dispatch(addItem(text));
    },
    onItemClick: (id) => {
      console.log(id);
      //dispatch(toggleTodo(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemList);
