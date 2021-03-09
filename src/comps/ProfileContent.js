import React, { useContext } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import ProfilePosts from './ProfilePosts'
import ProfileProf from './ProfileProf'
import ProfileDesigns from './ProfileDesigns'
import './styles/ProfileContent.css'
import { StoreContext } from './StoreContext'
import LockedContent from './LockedContent'

export default function ProfileContent(props) {

  const {myuser} = useContext(StoreContext)
  const {profimg, firstname, lastname, jobtitle, bio, followers, socials, uid} = props.el

  return ( 
    <div className="profilecontent">
      <div className="profilecontentheader">
        <NavLink exact to={`/profile/${uid}/`} activeClassName="activeproflink">
          <div className="profiletab">
            <h5><i className="fal fa-portrait"></i>Profile</h5>
          </div>
        </NavLink>
        <NavLink to={`/profile/${uid}/posts/`} activeClassName="activeproflink">
          <div className="poststab">
            <h5><i className="fal fa-pen-square"></i>Posts</h5>
          </div>
        </NavLink>
        <NavLink to={`/profile/${uid}/designs/`} activeClassName="activeproflink">
          <div className="poststab">
            <h5><i className="fal fa-paint-brush"></i>Designs</h5>
          </div>
        </NavLink>
      </div>
      <div className="profilecontentinner">
        <Switch>
          <Route exact path={`/profile/${uid}/`}>
            <ProfileProf el={props.el}/>
          </Route>
          <Route path={`/profile/${uid}/posts/`}>
            <ProfilePosts el={props.el}/>
          </Route> 
          <Route path={`/profile/${uid}/designs/`}>
            {
              myuser.membership==='pro'?<ProfileDesigns el={props.el}/>:
              <LockedContent />
            }
          </Route> 
        </Switch> 
      </div>
    </div>
  )
}