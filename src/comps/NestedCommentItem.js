import React from 'react'
import StampToDate from './StampToDate'
import AppButton from './AppButton'

export default function NestedCommentItem(props) {

  const {authorid, authorname, authorpic, text, dateadded, favorites} = props.el

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
          <AppButton title={`${favorites} ${favorites.length>1?'likes':'like'}`} icon="fal fa-heart"/>
        </div>
      </div>
    </div>
  )
}