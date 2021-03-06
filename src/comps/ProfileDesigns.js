import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import './styles/ProfileDesigns.css'
import axios from 'axios'

export default function ProfileDesigns(props) {

  const {uid, pinterestUsername} = props.el
  const [pinterest, setPinterest] = useState([])

  const behancecards = pinterest && pinterest.slice(0,6).map(el =>  {
    return <div>

    </div>
  })

  useEffect(() => { 
    axios({ 
      method: 'get',
      url: ``,
    }).then((response) => {
      console.log(response.data)   
    }) 
  },[])

  return (
    <div className="profiledesigns">
      <div className="profiledesignsheader">
        <NavLink to={`/profile/${uid}/designs/pinterest`} activeClassName="activedesignslink">
          <i className="fab fa-pinterest-p"></i>
          <span>Pinterest</span>
        </NavLink> 
        <NavLink to={`/profile/${uid}/designs/dribbble`} activeClassName="activedesignslink">
          <i className="fab fa-dribbble"></i>
          <span>Dribbble</span>
        </NavLink>
      </div>

      <div className="profiledesignscontent">
        {behancecards}
      </div>

    </div>
  )
}