import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Registerr.css'

function Registerr() {

  const [name ,setname] = useState('')
  const [email ,setemail] = useState('')
  const [number ,setnumber] = useState('')
  const [username ,setusername] = useState('')
  const [password ,setpassword] = useState('')      

  return (
    <div className='form'>
      <div className='registerr'>
        <h2>Registration Form</h2>
        <form method='POST' action='http://localhost:8080/register'>
          <input type='text' name='name' placeholder='Name' onChange={e=>(setname(e.target.value))}  value={name}/><br />
          <input type='email' name='email' placeholder='Email' onChange={e=>{setemail(e.target.value)}} value={email}/><br />
          <input type='number' name='phone' placeholder='Phone' onChange={e=>{setnumber(e.target.value)}} value={number}/><br />
          <input type='text' name='username' placeholder='Username' onChange={e=>{setusername(e.target.value)}} value={username} /><br />
          <input type='password' name='password' placeholder='Password' onChange={e=>{setpassword(e.target.value)}} value={password} /><br />
          <button type='submit' name='register' >Register</button>
          <Link to='/login'> login page</ Link>
        </form>
      </div>
    </div>
  )
}

export default Registerr