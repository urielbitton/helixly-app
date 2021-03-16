import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles/LockedContent.css'

export default function LockedContent(props) {

  const {msg="Upgrade your membership to access pro content"} = props
  const history = useHistory()

  return (
    <div className="lockedcontent">
      <i class="far fa-user-lock"></i>
      <h5>{msg}</h5>
      <button onClick={() => history.push('/upgrade')}>Get Pro</button>
    </div>
  ) 
}