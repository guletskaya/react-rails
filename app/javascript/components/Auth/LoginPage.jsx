import React from 'react'
import { useHistory } from 'react-router-dom'
import LoginForm from './LoginForm'

export const LoginPage = () => {
  const history = useHistory()

  return (
    <>
      <h1>Log In!</h1>
      <LoginForm />
  
      <button className="btn" onClick={() => history.push('/')}>
        Back to homepage
      </button>
    </>
  )
}
