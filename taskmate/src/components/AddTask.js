import React from 'react'

export default function AddTask() {
  return (
    <section className='addTask'>
      <form>
        <input type="text" name="task" autoComplete='false' placeholder='Enter your task name'/>
        <button type="submit">Add</button>
      </form>
    </section>
  )
}
