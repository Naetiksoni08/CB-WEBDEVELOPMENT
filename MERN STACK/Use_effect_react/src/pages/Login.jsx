import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <div>Login</div>
    <Link to="/">Go to Home</Link> <br />
    <Link to="/Signup">Go to signup</Link>
    </>

  )
}

export default Login