import React, { useContext } from 'react'
import { BrowserRouter as Router,Switch,Route,Link, useHistory } from "react-router-dom"
import AppButton from './AppButton'
import './styles/PostItem.css'
import {StoreContext} from './StoreContext'
import LikeBtn from './LikeBtn'
import BookmarkBtn from './BookmarkBtn'

export default function PostItem(props) {

  const {allusers, setCommentsScroll} = useContext(StoreContext)
  const {id, title, cover, content, tags, category, authorid, author, datecreated, comments, favlist, saves} = props.el
  const history = useHistory()   

  function shortenMsgs(text,num) {
    if(text.length > num) {
      let shortname = text.substring(0,num) + "..."
      return shortname
    }
    else {
      return text
    }
  }

  return (
    <div className="postitemcont">
      <div className="covercont">
        <img src={cover} alt="" onClick={() => history.push(`/posts/${id}`)}/>
      </div>
      <div className="infocont">
        <div className="headercont">
          <h3 onClick={() => history.push(`/posts/${id}`)}>{shortenMsgs(title,82)}</h3>
          <p>{shortenMsgs(content.slice(0,150),140)}</p>
        </div>
        <div className="elementscont">
          <div className="authorcont">
            <img src={""} alt=""/>  
            <h6><span>{author}</span><small>{datecreated}</small></h6>
          </div>
          <div className="actionscont">
            <LikeBtn favlist={favlist} post={props.el} likeaction="post"/>
            <AppButton title={`${comments.length} ${comments.length===1?"comment":"comments"}`} icon="fal fa-comment" onClick={() => {history.push(`/posts/${id}`);setCommentsScroll(prev => !prev)}} />
            <BookmarkBtn saves={saves} post={props.el} /> 
          </div> 
        </div>
      </div>
    </div>
  )
}