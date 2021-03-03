import React from 'react'
import './styles/Login.css'
import {AppInput} from './AppInputs'
import { Link } from 'react-router-dom'

export default function Login(props) {

  const {name, setName, email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props

  return (
    <div className="loginpage">
      <div className="loginwindow">
        <div className="infocont">
          <div className="loginform">
            <h4 className="logo"><img src="https://i.imgur.com/cMNAYDk.png" alt=""/>Helixly</h4>
            <h1>Welcome {hasAccount&&'Back'}</h1>
            <div className="googlebtn">
              <img src="https://i.imgur.com/9oF3IFX.png" alt=""/>
              <h6>{hasAccount?"Log in":"Sign up"} With Google</h6>
              <i></i>
            </div>
            <div className="orblock">
              <h6>Or {hasAccount?"log in":"sign up"} with email</h6>
              <hr/>
            </div>
            {
              !hasAccount&&
              <AppInput placeholder="Your full name" onChange={(e) => setName(e.target.value)} value={name}/>
            }
            <AppInput placeholder="Your email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <AppInput placeholder="Your password" type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            {
              hasAccount&&
              <div className="loginformactions">
                <AppInput type="checkbox" title="Keep me logged in"/>
                <Link to="forgotpass">Forgot Password</Link>
              </div>
            }
            <div className="loginbtn" onClick={hasAccount?handleLogin:handleSignup}>
              <span></span>
              <h6>{hasAccount?"Log in":"Sign up"}</h6>
              <i className="fal fa-long-arrow-right"></i>
            </div>
            <div className="hasaccountcont">
              {
                hasAccount?<h5>Don't have an account? <Link to="/" onClick={() => setHasAccount(prev => !prev)}>Sign Up</Link></h5>:
                <h5>Already have an account? <Link to="/" onClick={() => setHasAccount(prev => !prev)}>Log in</Link></h5> 
              }
            </div>
          </div>
        </div>
        <div className="imgcont">
          <div className="loginnotif">
            <h5>{hasAccount?"New Features Available":"Discover Helixly"}</h5>
            <small>
              {
                hasAccount?"We've added features to save posts for later. Check it out in your new account page":
                "Find out more about us on our official website at www.helixlysite.com or on social media: Helixly."
              }
            </small>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
} 