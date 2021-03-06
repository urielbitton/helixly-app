import React, {useContext} from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink, useLocation } from "react-router-dom"
import { StoreContext } from './StoreContext'
import './styles/BottomNav.css'
import firebase from 'firebase'
 
export default function BottomNav() {

  const {setEditMode, setEditData} = useContext(StoreContext)
  const location = useLocation()
  const user = firebase.auth().currentUser
 
  return (
    <div className="bottomnav" style={{display: location.pathname.match(/(newpost)/)?'none':'flex'}}>
      <NavLink exact to="/" activeClassName="activenavlink" title="Home"><div className="navicon"><i className="fal fa-home-alt"></i></div></NavLink>
      <NavLink to="/readinglist" activeClassName="activenavlink" title="Reading List"><div className="navicon"><i className="fal fa-books"></i></div></NavLink>
      <Link to="/newpost" onClick={() => {setEditData({});setEditMode(false)}}><div className="navicon addericon" title="New Post"><i className="fal fa-plus"></i></div></Link>
      <NavLink to={`/profile/${user.uid}`} activeClassName="activenavlink" title="My Account"><div className="navicon"><i className="fal fa-user"></i></div></NavLink>
      <NavLink to="/settings" activeClassName="activenavlink" title="Settings"><div className="navicon"><i className="fal fa-cog"></i></div></NavLink>
    </div>  
  )
}