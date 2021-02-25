import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import './styles/BottomNav.css'
 
export default function BottomNav() {
  return (
    <div className="bottomnav">
      <NavLink exact to="/" activeClassName="activenavlink"><div className="navicon"><i className="fal fa-home-alt"></i></div></NavLink>
      <NavLink to="/readinglist" activeClassName="activenavlink"><div className="navicon"><i className="fal fa-books"></i></div></NavLink>
      <Link to="/newpost"><div className="navicon addericon"><i className="fal fa-plus"></i></div></Link>
      <NavLink to="/account" activeClassName="activenavlink"><div className="navicon"><i className="fal fa-user"></i></div></NavLink>
      <NavLink to="/settings" activeClassName="activenavlink"><div className="navicon"><i className="fal fa-cog"></i></div></NavLink>
    </div>  
  )
}