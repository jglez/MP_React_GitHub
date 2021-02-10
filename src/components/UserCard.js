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
    <div>
      <h1>GitHub User Card</h1>
      <img src={user.avatar_url} alt='' />
      <h2><b>Name:</b> {user.name}</h2>
      <h2><b>Location:</b> {user.location}</h2>
      <p><b>Bio:</b> {user.bio}</p>
    </div>
  )
}

export default UserCard