import React, {useContext, useRef, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import AppButton from './AppButton'
import './styles/ArticleContent.css'
import {StoreContext} from './StoreContext'
import CommentItem from './CommentItem'
import NewComment from './NewComment' 
import StampToDate from './StampToDate'
import firebase from 'firebase'

export default function ArticleContent(props) {

  const {setEditData, setEditMode, commentsScroll, setCommentsScroll} = useContext(StoreContext)
  const {title, cover, content, tags, authorid, datecreated, comments, minread, favlist, saves} = props.props
  const {firstname, lastname, profimg} = props.theuser
  const history = useHistory()
  let commentsRef = useRef(null)
  const user = firebase.auth().currentUser
 
  const commentsrow = comments && comments.slice(0).reverse().map(el => {
    return <CommentItem el={el} allcomments={comments} />
  })
  
  useEffect(() => {
    commentsScroll&&commentsRef.current.scrollIntoView() 
    return() => {
      setCommentsScroll(false)
    } 
  },[user])

  return (
    <div className="articlecontent">
      <div className="headercont">
        <img src={cover} alt="" />
        <h1>{title}</h1> 
        <div className="metadatacont">
          <img src={profimg} alt=""/>
          <h6>{firstname} {lastname}</h6>
          <h6><span>{tags[0]}</span></h6>
          <h6><span>{StampToDate(datecreated)}</span></h6>
          <h6><span>{minread} min. read</span></h6>
          {
            user.uid===authorid&&
            <AppButton title="Edit" icon="fal fa-pen" onClick={() => {setEditData(props.props);history.push('/newpost');setEditMode(true)}}/>
          }
        </div>
      </div>
      <article className="textcontent"> 
        {content}
      </article>
      <div className="commentscont" ref={commentsRef}>
        <div className="commentsheader">
          <h3><i className="far fa-comment"></i>Discussion ({comments.length})</h3>
        </div>
        <NewComment comments={comments}/>
        {commentsrow}
      </div>
    </div>
  ) 
}