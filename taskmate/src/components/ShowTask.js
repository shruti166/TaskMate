import React from 'react'

export default function ShowTask() {
  const tasks = [{id: 10001, name: "TASK A", time: ""}];

  return (
    <section className='showTask'>
      <div className='head'>
        <div>
          <span className='title'>Todo</span>
          <span>0</span>
        </div>
        <button className='clearAll'>Clear All</button>
      </div>
    </section>
  )
}
