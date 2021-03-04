import React from 'react'
import StampToDate from './StampToDate'
import LikeBtn from './LikeBtn'

export default function NestedCommentItem(props) {

  const {authorid, authorname, authorpic, text, dateadded, favlist} = props.el

  return (
    <div className="commentitem">
      <div className="left">
        <img src={authorpic} alt=""/>
      </div>
      <div className="right"> 
        <div className="commentbody">
          <h5>{authorname}<span>•</span><span>{StampToDate(dateadded)}</span><i className="far fa-ellipsis-h"></i></h5>
          <p>{text}</p>
        </div>
        <div className="commentactions">
         <LikeBtn favlist={favlist} comment={props.el} likeaction="comment" /> 
        </div>
      </div>
    </div>
  )
}