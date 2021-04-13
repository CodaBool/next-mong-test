import React from 'react'
import axios from 'axios'

export default function index() {

  console.log('var', )

  function handleClick() {
    axios.get('/api/test')
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data))
  }
  function handleSimpleClick() {
    axios.get('/api/simpleTest')
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data))
  }

  return (
    <div>
      <h1>Home</h1>
      <h1>STAGE = {process.env.NEXT_PUBLIC_STAGE}</h1>
      <h1>URI = {process.env.MONGODB_URI}</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleSimpleClick}>handleSimpleClick</button>
    </div>
  )
}
