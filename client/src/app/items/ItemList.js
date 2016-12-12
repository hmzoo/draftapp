import React from 'react'
import Item from './Item'

const ItemList = ({items, onItemClick,addItem}) => (

    <div>
      <button onClick={() => addItem('new item')}>ADD</button>
      {items.map(item => <Item data={item.text} key={item.id} onClick={() => onItemClick(item.id)}/>)}

    </div>
)



export default ItemList
