import React, {useContext, useState} from 'react'
import TextAutosize from 'react-textarea-autosize'
import firebase from 'firebase'
import {db} from './Fire'
import { StoreContext } from './StoreContext'
import AppButton from './AppButton'
import './styles/NewComment.css'

export default function NewComment(props) {

  const {posts} = useContext(StoreContext)
  const {comments, show=true, setShowReply} = props
  const [commentText, setCommentText] = useState('')
  const user = firebase.auth().currentUser

  function postComment() {
    let commentObj = {
      author: db.collection('users').doc(user.uid),
      id: db.collection('posts').doc().id,
      authorid: user.uid,
      favlist: [],
      text: commentText,
      dateadded: firebase.firestore.Timestamp.now(),
      comments: []
    } 
    comments.push(commentObj)
    db.collection('posts').doc('articles').update({
      allposts: posts
    }) 
    setCommentText('')
    setShowReply&&setShowReply(prev => !prev)
  } 

  return (
    <div className="addnewcommentcont" style={{display: show?"flex":"none"}}>
      <div className="left">
        <img src={user.photoURL} alt=""/>
      </div>
      <div className="right">
        <TextAutosize 
          className="addnewcommentinp hidescroll" 
          placeholder="Write a comment..." 
          onChange={(e) => setCommentText(e.target.value)}
          value={commentText}
        />
        <AppButton className={!commentText&&"postcommentbtn-disabled"} title="Post Comment" size={12.5} onClick={() => commentText&&postComment()}/>
      </div>
    </div>
  )
}