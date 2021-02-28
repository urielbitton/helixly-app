import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link, useHistory } from "react-router-dom"
import AppButton from './AppButton'
import './styles/PostItem.css'

export default function PostItem(props) {

  const {id, title, cover, content, tags, category, author, profpic, datecreated} = props.el
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
            <img src={profpic} alt=""/>
            <h6><span>{author}</span><small>{datecreated}</small></h6>
          </div>
          <div className="actionscont">
            <AppButton title="2 Comments" icon="fal fa-comment" />
            <AppButton title="Save" icon="fal fa-bookmark" />
          </div>
        </div>
      </div>
    </div>
  )
}