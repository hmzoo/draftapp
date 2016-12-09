import React from 'react';

export default({peers}) => (
    <div >
      {peers.map(p => (
        <div key={p.id} className='box /3/12 fl' >
          {p.name}
        </div>
      ))}
    </div>
)
