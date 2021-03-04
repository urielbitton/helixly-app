import React, { useState } from 'react'
import './styles/CommentItem.css'
import StampToDate from './StampToDate'
import AppButton from './AppButton'
import NestedCommentItem from './NestedCommentItem'
import { Link } from 'react-router-dom'
import NewComment from './NewComment'
import LikeBtn from './LikeBtn'

export default function CommentItem(props) {

  const {authorid, authorname, authorpic, text, dateadded, favlist, comments} = props.el
  const [showReply, setShowReply] = useState(false)
 
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
          <LikeBtn favlist={favlist} comment={props.el} likeaction="comment" />
          <AppButton title={!showReply?"reply":'dismiss'} icon={!showReply?"fal fa-comment":"fal fa-comment-slash"} onClick={() => setShowReply(prev => !prev)}/>
        </div>
        <NewComment comments={comments} show={showReply?true:false} setShowReply={setShowReply}/>
        {
          comments.length>0&&
          <div className="nestedcommentscont">
           {nestedcommentsrow}
          </div>
        }
      </div>
    </div>
  )
}