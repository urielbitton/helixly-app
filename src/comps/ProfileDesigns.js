import React, {useEffect, useState} from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import './styles/ProfileDesigns.css'
import axios from 'axios'
import DribbbleComp from './DribbbleComp'
import PinterestComp from './PinterestComp'

export default function ProfileDesigns(props) {

  const {uid, firstname, lastname, dribbble_access_token, pinterestUsername} = props.el
  const [dribbble, setDribbble] = useState([])
  const [pinterest, setPinterest] = useState([]) 
 
  useEffect(() => { 
    dribbble_access_token&&
    axios({ 
      method: 'get',
      url: `https://api.dribbble.com/v2/user/shots?access_token=${dribbble_access_token}`,
    }).then((response) => {
      setDribbble(response.data) 
    })
    pinterestUsername&&
    axios({ 
      method: 'get',
      url: `https://api.pinterest.com/v3/pidgets/users/${pinterestUsername}/pins/`,
    }).then((response) => {
      setPinterest(response.data.data)   
    }) 
  },[])

  return (
    <div className="profiledesigns">
      <div className="profiledesignsheader">
        <NavLink exact to={`/profile/${uid}/designs/`} activeClassName="activedesignslink">
          <i className="fab fa-dribbble"></i>
          <span>Dribbble</span>
        </NavLink>
        <NavLink to={`/profile/${uid}/designs/pinterest`} activeClassName="activedesignslink">
          <i className="fab fa-pinterest-p"></i>
          <span>Pinterest</span>
        </NavLink> 
        <NavLink to={`/profile/${uid}/designs/instagram`} activeClassName="activedesignslink">
          <i className="fab fa-instagram"></i>
          <span>Instagram</span>
        </NavLink> 
      </div>

      <div className="profiledesignscontent">
        <Switch>
          <Route exact path={`/profile/${uid}/designs/`}>
            <DribbbleComp apiname="Dribbble" api={dribbble} userinfo={props.el} />
          </Route>
          <Route path={`/profile/${uid}/designs/pinterest`}>
          {pinterest.user&&<PinterestComp apiname="Pinterest" api={pinterest} userinfo={props.el} />}
          </Route>
          <Route path={`/profile/${uid}/designs/instagram`}>
            Coming Soon
          </Route>
        </Switch>
      </div>

    </div>
  )
}