import React, { useContext } from 'react'
import firebase from 'firebase'
import {db} from './Fire'
import { StoreContext } from './StoreContext'

export default function BookmarkBtn(props) {
  
  const {saves, posts} = useContext(StoreContext)
  const {post} = props
  const user = firebase.auth().currentUser

  function bookmarkPost() {
    if(post.saves.includes(user.uid)) {
      post.saves
      .filter(x => x===user.uid)
      .forEach(el => {
        let itemindex = post.saves.indexOf(el)
        post.saves.splice(itemindex)
      })
    }
    else {
      post.saves.push(user.uid)
    }
    db.collection('posts').doc('articles').update({
      allposts: posts
    })
  }
  
  return ( 
    <i 
      style={post&&post.saves.includes(user.uid)?{color:'var(--color)',fontWeight:600}:{}}
      className="fal fa-bookmark"
      onClick={() => bookmarkPost()}
    ></i>
  )
}