import React  from 'react';



export default ({sio})=>(
  <div >
    {sio.connected?"⇔":"⇎"}

    <small> {sio.infos}</small>
  </div>
)
