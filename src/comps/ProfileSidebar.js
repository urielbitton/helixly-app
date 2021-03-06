import React, { useContext } from 'react'
import AppButton from './AppButton'
import {StoreContext} from './StoreContext'
import './styles/ProfileSidebar.css'
import firebase from 'firebase'

export default function ProfileSidebar(props) {

  const {posts} = useContext(StoreContext)
  const {profimg, firstname, lastname, jobtitle, bio, followers, socials, uid, website} = props.el
  const postsnum = posts.filter(x => x.authorid===uid).length 
  const user = firebase.auth().currentUser
 
  const socialsrow = socials && socials.map(el => {
    return <h5>
      <i className={el.icon}></i>
      <a href={`https://${el.link}`} target="_blank" rel="noreferrer">{el.name}</a>
    </h5>
  })

  return (
    <div className="profilesidebar">
      <div className="profcont" style={{backgroundImage: `url(${profimg})`}}></div>
      <div className="proftitles">
        <h4>{firstname} {lastname}</h4>
        <h6>{jobtitle}</h6>
      </div>
      <div className="statscont">
        <h3>{followers.length}<small>Followers</small></h3><hr />
        <h3>{postsnum}<small>{postsnum===1?"Post":"Posts"}</small></h3><hr />
        <h3>0<small>Comments</small></h3>
      </div>
      <div className="biocont">
        <p>{bio}</p>
      </div>
      { 
        user.uid===uid?
        <AppButton title="Edit Profile" icon="fal fa-user-edit" bg="var(--color)" color="#fff" iconcolor="#fff" size={14}/>
        :<AppButton title="Follow" icon="fal fa-user-plus" bg="var(--color)" color="#fff" iconcolor="#fff" size={14}/>
      }
      <div className="socialscont">
        {socialsrow}
        <h5><i className='far fa-link'></i><a href={`https://${website}`} target="_blank" rel="noreferrer">{website}</a></h5>
      </div>
    </div> 
  )
}