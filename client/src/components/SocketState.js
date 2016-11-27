import React  from 'react';



export default ({sio})=>(
  <div >
    {sio.connected?"⇔":"⇎"}
    {sio.sendBuffer.map(s=>(
      <div key={s.id}><b>{s.channel}</b> {s.datas?s.datas.toString():""} <small>{s.infos}</small></div>

    ))}
    <small> {sio.infos}</small>
  </div>
)
