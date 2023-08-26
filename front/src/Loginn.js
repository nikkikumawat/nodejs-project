import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './loginn.css'

function Loginn() {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const navigate = useNavigate()

  function handelsubmit(e) {
    e.preventDefault()
    axios.post('http://localhost:8080/login', {       
      username, password 
    })
      .then((result) => {
        if (result.data === "success") {
          localStorage.setItem('name', username)
          navigate('/quiz');
        }
      })
    console.log(username,password)
  }

  return (
    <div className='loginn'>
      <div className='login'>
        <h2>Login</h2>
        <form method='post' onSubmit={handelsubmit}>
          <input type='text'
            name='username'
            placeholder='Username'
            value={username}
            onChange={(e) => { setusername(e.target.value) }}
          /><br />

          <input type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={(e) => { setpassword(e.target.value) }}
          /><br />
          <button type='submit' name='login'>Login</button>
        </form>

      </div>
    </div>
  )
}

export default Loginn