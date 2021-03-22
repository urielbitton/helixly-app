import React, { useContext } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import SettingsProfile from './SettingsProfile'
import SettingsPrefs from './SettingsPrefs'
import SettingsTheme from './SettingsTheme'
import './styles/Settings.css'
import ProfileSidebar from './ProfileSidebar'
import { StoreContext } from './StoreContext'
import './styles/ProfileSidebar.css'

export default function Settings() {

  const {myuser} = useContext(StoreContext)

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
        <button>Save</button>
      </div>
      <div className="settingscont">
        <div className="settingsflex"> 
          <div className="profilepage">
            <ProfileSidebar el={myuser} editbtn={false} />
          </div>
          <Switch>
            <Route exact path="/settings/">
              {myuser.fullname&&<SettingsProfile />}
            </Route>
            <Route path="/settings/preferences">
              <SettingsPrefs />
            </Route>
            <Route exact path="/settings/">
              <SettingsTheme />
            </Route>
          </Switch>
        </div>
      </div>

    </div>
  )
}