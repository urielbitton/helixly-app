import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {AppInput, AppSwitch} from './AppInputs'
import './styles/Navbar.css'
import firebase from 'firebase'
import {StoreContext} from './StoreContext'

export default function Navbar() {

  const {myuser} = useContext(StoreContext)
  const [openProf, setOpenProf] = useState(false)
  const history = useHistory()
  const user = firebase.auth().currentUser

  useEffect(() => {
    window.onclick = () => {
      setOpenProf(false)
    }
  })

  return (
    <nav>
      <div className="grid">
      <div className="navgroup">
        <h4 className="logo" onClick={() => history.push('/')}><img src="https://i.imgur.com/ZcJS2PV.png" alt=""/>Helixly</h4>
        <AppInput iconclass="fal fa-search" placeholder="Search..."/>
      </div>
      <div className="navgroup">
        <div className="toolbar">
          <div className="darkmodecont">
            <i className="fal fa-moon-stars"></i>
            <AppSwitch onChange={() => null}/>
          </div> 
        </div>
        <div className="profcont" onClick={(e) => {e.stopPropagation();setOpenProf(prev => !prev)}} style={{background:openProf&&'#fff'}}>
          <img src={myuser.profimg} alt="" />
          <h6>{myuser.fullname}</h6> 
          <i className="fas fa-th" style={{color:openProf&&'var(--color)'}}></i> 
        </div>
        <div className={openProf?'profslidecont profslidecont-open':'profslidecont'}>
          <h6 onClick={(e) => e.stopPropagation()}>Account</h6>
          <Link><i className="far fa-user"></i>My Account</Link>
          <Link><i className="far fa-sliders-h"></i>Preferences</Link>
          <Link><i className="far fa-heart"></i>My Favorites</Link>
          <h6 onClick={(e) => e.stopPropagation()}>Actions</h6>
          <Link to="/upgrade"><i className="far fa-unlock-alt"></i>Upgrade to Pro</Link>
          <a href=" " onClick={() => firebase.auth().signOut()}><i className="far fa-sign-out"></i>Log Out</a>
        </div>
      </div>
      </div>
    </nav>
  )
}