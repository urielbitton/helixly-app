import React, {useEffect, useState} from 'react'
import ArticleContent from './ArticleContent'
import { db } from './Fire'
import PostSidebar from './PostSidebar'
import './styles/PostPage.css'

export default function PostPage(props) {

  const [theUser, setTheUser] = useState([])
  const {authorid} = props.el

  useEffect(() => {
    db.collection('users').doc(authorid).onSnapshot(snap => {
      setTheUser(snap.data().userinfo) 
    })
  },[])

  return (
    <div className="postpage">
      <PostSidebar props={props.el} theuser={theUser} />
      <ArticleContent props={props.el} theuser={theUser} /> 
    </div>
  )
}