import React, { useContext } from 'react'
import AppButton from './AppButton'
import {db} from './Fire'
import { StoreContext } from './StoreContext'
import firebase from 'firebase'

export default function LikeBtn(props) {

  const {posts} = useContext(StoreContext)
  const {comment, post, favlist, short, likeaction} = props
  const user = firebase.auth().currentUser

  function addLikePost() {
    if(post.favlist.includes(user.uid)) {
      post.favlist
      .filter(x => x===user.uid)
      .forEach(el => {
        let itemindex = post.favlist.indexOf(el)
        post.favlist.splice(itemindex)
      })
    }
    else {
      post.favlist.push(user.uid)
    }
    db.collection('posts').doc('articles').update({
      allposts: posts
    })
  }
  function addLikeComment() { 
    if(comment.favlist.includes(user.uid)) {
      comment.favlist
      .filter(x => x===user.uid)
      .forEach(el => {
        let itemindex = comment.favlist.indexOf(el)
        comment.favlist.splice(itemindex)
      })
    }
    else {
      comment.favlist.push(user.uid)
    }
    db.collection('posts').doc('articles').update({
      allposts: posts
    })
  }

  return (
    <AppButton 
      title={`${favlist.length} ${!short?(favlist.length===1?'like':'likes'):""}`} 
      icon={((post&&post.favlist.includes(user.uid))||(comment&&comment.favlist.includes(user.uid)))?"fal fa-heart liked":"fal fa-heart"}
      iconcolor=""
      onClick={() => likeaction==='comment'?addLikeComment():addLikePost()}
    />
  )
}
