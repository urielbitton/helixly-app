import React, {useState, useEffect} from "react"
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import "./styles.css"
import AppContainer from './comps/AppContainer'
import Login from './comps/Login'
import StoreContextProvider from './comps/StoreContext'
import Fire from './comps/Fire'
import firebase from 'firebase'
 
export default function App() {

  const [user, setUser] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState(false)

  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }
  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }

  const handleLogin = () => {
    clearErrors()
    firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
      switch(err.code) {
        case "auth/invalid-email":
        case "auth/user/disabled":
        case "auth/user-not-found":
          setEmailError(err.message)
        break
        case "auth/wrong-password":
          setPasswordError(err.message)
        break
        default:
      } 
    })
  }
  const handleSignup = () => {
    clearErrors()
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => {
      switch(err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message)
        break
        case "auth/weak-password":
          setPasswordError(err.message)
        break
        default:
      }
    })
    Fire.auth().onAuthStateChanged(user => {
      if(user) {
        user.updateProfile({
          displayName: name
        })
        const usersRef = firebase.database().ref('users').child(user.uid)
        const users = {
          firstname: name.split(' ')[0],
          lastname: name.split(' ')[0],
          email: user.email,
          phone: "",
          city: "",
          provstate: "",
          jobtitle: "",
          website:  "",
          country: "",
          profimg: "",
          settings: {
            
          } 
        } 
        usersRef.set(users)
      }
      else {
        setUser('')
      } 
    }) 
  }
  const handleLogout = () => {
    firebase.auth().signOut()
  }
  const authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        clearInputs()
        setUser(user)
      }
      else {
        setUser('')
      }
    })
  }

  useEffect(() => {
    authListener()
  },[]) 

  return (
    <div className="App">
      <StoreContextProvider>
        <Router>
          {user?<AppContainer />:
          <Login 
            email={email} 
            name={name}
            setName={setName}
            setEmail={setEmail} 
            password={password} 
            setPassword={setPassword} 
            handleLogin={handleLogin} 
            handleSignup={handleSignup} 
            hasAccount={hasAccount} 
            setHasAccount={setHasAccount} 
            emailError={emailError}
            passwordError={passwordError}
          />
        }
        </Router>
      </StoreContextProvider>
    </div>
  );
}
 