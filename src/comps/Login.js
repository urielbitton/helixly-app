import React from 'react'
import './styles/Login.css'

export default function Login(props) {

  const {name, setName, email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props

  return (
    <div className="loginpage">
      Login Page
    </div>
  )
} 