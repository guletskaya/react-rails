import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { SignUpForm } from './SignUpForm'

export const SignUpPage = () => {
  const history = useHistory()
  
  return (
    <>
      <h1>Sign Up!</h1>

      <SignUpForm />
  
      <button className="btn" onClick={() => history.push('/')}>
        Back to homepage
      </button>
    </>
  )
}
