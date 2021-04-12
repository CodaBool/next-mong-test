import React from 'react'
import axios from 'axios'

export default function index() {

  function handleClick() {
    console.log('click')
    axios.get('/api/test')
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data))
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}
