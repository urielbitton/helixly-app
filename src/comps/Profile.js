import React, { useEffect } from 'react'
import './styles/Profile.css'
import firebase from 'firebase'
import AppButton from './AppButton'

export default function Profile(props) {

  const {profimg, firstname, lastname, jobtitle, bio, followers, socials} = props.el
  const user = firebase.auth().currentUser 
  const socialtitles = ['fab fa-linkedin-in','fab fa-instagram','fab fa-facebook-f','fab fa-twitter']
 
  const sociallinks = Object.keys(socials).map((key,index) => {
    return <h5> 
      <i className={socialtitles[index]}></i>
      <a href={`https://${socials[key]}`} target="_blank" rel="noreferrer">{socials[key]}</a>
    </h5>
  }) 

  return (
    <div className="profilepage">
      <div className="profilesidebar">
        <div className="profcont" style={{backgroundImage: `url(${profimg})`}}></div>
        <div className="proftitles">
          <h4>{firstname} {lastname}</h4>
          <h6>{jobtitle}</h6>
        </div>
        <div className="statscont">
          <h3>{followers.length}<small>Followers</small></h3><hr />
          <h3>0<small>Posts</small></h3><hr />
          <h3>0<small>Comments</small></h3>
        </div>
        <div className="biocont">
          <p>{bio}</p>
        </div>
        <AppButton title="Follow" icon="fal fa-user-plus" bg="var(--color)" color="#fff" iconcolor="#fff" size={14}/>
        <div className="socialscont">
          {sociallinks}
        </div>
      </div> 
      <div className="profilecontent">
        <div className="profilecontentheader">

        </div>
        <div className="profilecontentinner">

        </div>
      </div>
      <div className="profilerightbar"></div>
    </div>
  )
}