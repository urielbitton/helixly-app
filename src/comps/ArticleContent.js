import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import AppButton from './AppButton'
import './styles/ArticleContent.css'
import {StoreContext} from './StoreContext'
import CommentItem from './CommentItem'
import TextAutosize from 'react-textarea-autosize'
import firebase from 'firebase'
import {db} from './Fire'

export default function ArticleContent(props) {

  const {posts, setEditData, setEditMode} = useContext(StoreContext)
  const {id, title, cover, content, tags, author, profpic, datecreated, comments, minread} = props.props
  const [commentText, setCommentText] = useState('')
  const history = useHistory()

  const commentsrow = comments && comments.slice(0).reverse().map(el => {
    return <CommentItem el={el}/>
  })

  function postComment() {
    let commentObj = {
      authorid: 'njs84ngsfngdsfhj',
      authorname: 'Uriel Bitton',
      authorpic: 'https://i.imgur.com/L76EEqM.jpg',
      favorites: 0,
      text: commentText,
      dateadded: firebase.firestore.Timestamp.now()
    }
    comments.push(commentObj)
    db.collection('posts').doc('articles').update({
      allposts: posts
    }) 
    setCommentText('')
  }

  return (
    <div className="articlecontent">
      <div className="headercont">
        <img src={cover} alt="" />
        <h1>{title}</h1> 
        <div className="metadatacont">
          <img src={profpic} alt=""/>
          <h6>{author}</h6>
          <h6><span>{tags[0]}</span></h6>
          <h6><span>{datecreated}</span></h6>
          <h6><span>{minread} minute read</span></h6>
          <h6>{comments.length}<i className="far fa-comment"></i></h6>
          <AppButton title="Edit" icon="fal fa-pen" onClick={() => {setEditData(props.props);history.push('/newpost');setEditMode(true)}}/>
        </div>
      </div>
      <article className="textcontent"> 
        {content}
      </article>
      <div className="commentscont">
        <div className="commentsheader">
          <h3><i className="far fa-comment"></i>Comments ({comments.length})</h3>
        </div>
        <div className="addnewcommentcont">
          <div className="left">
            <img src="https://i.imgur.com/L76EEqM.jpg" alt=""/>
          </div>
          <div className="right">
            <TextAutosize 
              className="addnewcommentinp hidescroll" 
              placeholder="Write a comment..." 
              onChange={(e) => setCommentText(e.target.value)}
              value={commentText}
            />
            {
              commentText&&
              <AppButton title="Post Comment" size={12.5} onClick={() => postComment()}/>
            }
          </div>
        </div>
        {commentsrow}
      </div>
    </div>
  ) 
}