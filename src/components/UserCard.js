import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UserCard = () => {
  const [user, setUser] = useState('')

  // We're scheduling whatever code inside of the callback to run after the first render cycle
  // When this component is done being painted in the DOM, this code runs
  useEffect(() => {
    axios
      .get('https://api.github.com/users/jglez')
      .then(res => {
        setUser(res.data)
        console.log(user)
      })
      .catch(err => {
        console.log(`Error is ${err}`)
      })
  }, [])


  return (
    <div className='card'>
      <h1>GitHub User Card</h1>
      <img src={user.avatar_url} alt='' />

      <div className='card-text'>
        <p><b>Name:</b> {user.name}</p>
        <p><b>Handle:</b> {user.login}</p>
        <p><b>Location:</b> {user.location}</p>
      </div>
    </div>
  )
}

export default UserCard