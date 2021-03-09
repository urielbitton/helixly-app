import React from 'react'
import './styles/LockedContent.css'

export default function LockedContent(props) {

  const {msg="Upgrade your membership to access pro content"} = props

  return (
    <div className="lockedcontent">
      <i class="far fa-user-lock"></i>
      <h5>{msg}</h5>
    </div>
  ) 
}