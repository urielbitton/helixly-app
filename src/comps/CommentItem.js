import React from 'react'
import './styles/CommentItem.css'
import StampToDate from './StampToDate'
import AppButton from './AppButton'
import NestedCommentItem from './NestedCommentItem'
import { Link } from 'react-router-dom'

export default function CommentItem(props) {

  const {authorid, authorname, authorpic, text, dateadded, favorites, comments} = props.el
 
  const nestedcommentsrow = comments && comments.map(el => {
    return <NestedCommentItem el={el} />
  })

  return (
    <div className="commentitem">
      <div className="left">
        <img src={authorpic} alt=""/>
      </div>
      <div className="right"> 
        <div className="commentbody">
          <h5><Link to="">{authorname}</Link><span>•</span><span>{StampToDate(dateadded)}</span><i className="far fa-ellipsis-h"></i></h5>
          <p>{text}</p>
        </div>
        <div className="commentactions">
          <AppButton title={`${favorites} ${favorites>1?'likes':'like'}`} icon="fal fa-heart"/>
          <AppButton title="reply" icon="fal fa-comment"/>
        </div>
        {
          comments&&
          <div className="nestedcommentscont">
           {nestedcommentsrow}
          </div>
        }
      </div>
    </div>
  )
}