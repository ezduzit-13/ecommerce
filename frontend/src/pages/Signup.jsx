import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {createUser} from '../utils/authentication'


const Signup = () => {
  const navigate = useNavigate()
  return (
  
    <>
    <div className='box'>
      <div className='other-box'>
      <h1>signup.</h1>
    <hr></hr>
    <form onSubmit={createUser}>
      <input name="email" id="email" placeholder="Username"/>
      <br />
      <br />
      <input id = 'password' placeholder='Password'/>
      <br />
      <br />
      <button id='submit'>submit</button>
    </form>


      </div>

    </div>
    <br /><br />
    <h2
      className='word-button' 
      onClick={
        ()=>{
          navigate('/login')
        }
      }>
        Existing User
      </h2>

  </>
  )
}

export default Signup