import React from 'react'
import { useHistory } from 'react-router-dom'
import {AppInput, AppSwitch} from './AppInputs'
import './styles/Navbar.css'

export default function Navbar() {

  const history = useHistory()

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
            <AppSwitch />
          </div>
        </div>
        <div className="profcont">
          <img src="https://i.imgur.com/L76EEqM.jpg" alt="" />
          <i className="fas fa-angle-down"></i> 
        </div>
      </div>
      </div>
    </nav>
  )
}