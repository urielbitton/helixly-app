import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/Settings.css'

export default function Settings() {
  return (
    <div className="settingspage">
      <h4>Settings</h4>

      <div className="settingsheader">
        <NavLink exact to="/settings/" activeClassName="activesettingslink">
          <span>Profile</span>
          <hr/>
        </NavLink>
        <NavLink to="/settings/preferences" activeClassName="activesettingslink">
          <span>Preferences</span>
          <hr/>
        </NavLink>
        <NavLink to="/settings/theme" activeClassName="activesettingslink">
          <span>Theme</span>
          <hr/>
        </NavLink>
      </div>
    </div>
  )
}