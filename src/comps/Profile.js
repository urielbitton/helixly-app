import React from 'react'
import './styles/Profile.css'
import ProfileSidebar from './ProfileSidebar'
import ProfileContent from './ProfileContent'
import ProfileRightSidebar from './ProfileRightSidebar'

export default function Profile(props) {
 
  return (
    <div className="profilepage">
      <ProfileSidebar el={props.el} />
      <ProfileContent el={props.el} />
      <ProfileRightSidebar el={props.el} />
    </div>
  )
}