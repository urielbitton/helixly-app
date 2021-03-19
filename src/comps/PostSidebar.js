import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import AppButton from './AppButton'
import './styles/PostSidebar.css'
import firebase from 'firebase'
import BookmarkBtn from './BookmarkBtn'
import {db} from './Fire' 

export default function PostSidebar(props) {

  const {comments, favlist, saves, authorid} = props.props
  const {fullname, profimg, bio, socials, website} = props.theuser
  const history = useHistory()
  const user = firebase.auth().currentUser

  return ( 
    <div className="postsidebar"> 
      <div className="breadcrumbscont">
        <h5 onClick={() => history.goBack()}><i className="fal fa-long-arrow-alt-left"></i></h5>
      </div>
      <div className="sharescont">
        <div>
          <div className="iconcont"><i className="far fa-heart" style={favlist.includes(user.uid)?{color:'var(--color)',fontWeight:600}:{}}></i></div>
          <h6>{favlist.length}</h6>
        </div> 
        <div>
          <div className="iconcont"><BookmarkBtn saves={saves} post={props.props}/></div>
          <h6>{saves.length}</h6>
        </div>
        <div>
          <div className="iconcont"><i className="far fa-comment"></i></div>
          <h6>{comments.length}</h6>
        </div>
        <div>
          <div className="iconcont"><i className="far fa-ellipsis-h"></i></div>
        </div>
      </div> 
      <div className="postauthorcont">
        <h6 className="authorcont" onClick={() => history.push(`/profile/${authorid}`)}><img src={profimg} alt=""/><span>{fullname}</span></h6>
        <p>{bio}</p>
        <div className="authorbtns">
          <AppButton title="Follow" size={14} icon="far fa-plus" bg="#e6e6e6" />
          <AppButton title="Message" size={14} icon="far fa-paper-plane" bg="#e6e6e6"/>
        </div>
        <br/>
        <button onClick={() => history.push(`/profile/${authorid}`)}>View Profile</button>
        <hr />
        <h6 className="weblink"><i class="far fa-link"></i><a href={`https://${website}`} target="_blank" rel="noreferrer">{website}</a></h6>
      </div>
    </div>
  )
}