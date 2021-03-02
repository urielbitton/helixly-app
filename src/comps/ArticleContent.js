import React, {useState, useContext, useRef, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import AppButton from './AppButton'
import './styles/ArticleContent.css'
import {StoreContext} from './StoreContext'
import CommentItem from './CommentItem'
import NewComment from './NewComment'


export default function ArticleContent(props) {

  const {setEditData, setEditMode, commentsScroll, setCommentsScroll} = useContext(StoreContext)
  const {id, title, cover, content, tags, author, profpic, datecreated, comments, minread} = props.props
  const history = useHistory()
  let commentsRef = useRef(null)

  const commentsrow = comments && comments.slice(0).reverse().map(el => {
    return <CommentItem el={el}/>
  })
  
  useEffect(() => {
    commentsScroll&&commentsRef.current.scrollIntoView()
    return() => {
      setCommentsScroll(false)
    }
  },[])

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
          <AppButton title="Edit" icon="fal fa-pen" onClick={() => {setEditData(props.props);history.push('/newpost');setEditMode(true)}}/>
        </div>
      </div>
      <article className="textcontent"> 
        {content}
      </article>
      <div className="commentscont" ref={commentsRef}>
        <div className="commentsheader">
          <h3><i className="far fa-comment"></i>Comments ({comments.length})</h3>
        </div>
        <NewComment comments={comments}/>
        {commentsrow}
      </div>
    </div>
  ) 
}