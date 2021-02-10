import React, { useState } from 'react'
import axios from 'axios'

const UserCard = () => {
  const [user, setUser] = useState('')

  axios
    .get(`https://api.github.com/users/jglez`)
    .then(res => {
      console.log(res)
    })

  return (
    <div>
      <h1>GitHub User Card</h1>
    </div>
  )
}

export default UserCard