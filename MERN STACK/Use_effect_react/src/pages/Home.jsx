import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div>Home</div>
    <Link to="/Login">Go to Login</Link> <br />
    <Link to="/Signup">Go to signup</Link>
    </>
  )
}

export default Home