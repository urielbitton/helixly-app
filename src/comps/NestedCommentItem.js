import React, {useContext, useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import StampToDate from './StampToDate'
import LikeBtn from './LikeBtn'
import CommentsOpts from './CommentsOpts'
import firebase from 'firebase'
import { db } from './Fire'
import { StoreContext } from './StoreContext'
import AppButton from './AppButton'

export default function NestedCommentItem(props) {

  const {posts} = useContext(StoreContext)
  const {id, author, authorid, text, dateadded, favlist} = props.el
  const {allcomments} = props
  const [theUser, setTheUser] = useState([])
  const [editing, setEditing] = useState(false)
  const [newText, setNewText] = useState(text)
  const user = firebase.auth().currentUser
  const textRef = useRef()

  function saveComment() {
    let commentObj = {
      author: db.collection('users').doc(user.uid),
      id,
      authorid,
      favlist,
      text: newText,
      dateadded,
      comments: []
    }  
    allcomments && allcomments.filter(x => x.id===id).forEach(el => {
      let itemindex = allcomments.indexOf(el)
      allcomments[itemindex] = commentObj 
    })
    db.collection('posts').doc('articles').update({
      allposts: posts
    })
  }
  function deleteComment() {
    let confirm = window.confirm('Are you sure you want to delete this comment?')
    if(confirm) {
      allcomments && allcomments.filter(x => x.id===id).forEach(el => {
        let itemindex = allcomments.indexOf(el)
        allcomments.splice(itemindex,1)
      }) 
      db.collection('posts').doc('articles').update({
        allposts: posts
      })
    }
  }

  useEffect(() => {
    author.onSnapshot(snap => {
      setTheUser(snap.data().userinfo) 
    })
    textRef.current.focus()
    setNewText(text)
  },[editing])

  return ( 
    <div className="commentitem">
      <div className="left">
        <img src={theUser.profimg} alt=""/>
      </div>
      <div className="right"> 
        <div className="commentbody">
          <h5>
            <Link to="">{theUser.firstname} {theUser.lastname}</Link>
            <span>•</span>
            <span>{StampToDate(dateadded)}</span>
            <CommentsOpts editing={editing} setEditing={setEditing} editAccess={authorid===user.uid} deleteComment={deleteComment} />
          </h5>
          <textarea 
            ref={textRef} 
            disabled={editing?null:'disabled'} 
            className={editing?"commenttextarea comment_textarea_editing":"commenttextarea"}
            value={editing?newText:text}
            onChange={(e) => setNewText(e.target.value)}
            >
            {text}
          </textarea>
        </div>
        <div className="commentactions" style={{display:editing?"none":""}}>
         <LikeBtn favlist={favlist} comment={props.el} likeaction="comment" /> 
        </div>
        <div className="editingactions" style={{display: editing?"":"none"}}>
          <AppButton title="Save" icon="fal fa-save" onClick={() => {saveComment();setEditing(prev => !prev)}}/>
        </div>
      </div>
    </div>
  )
}