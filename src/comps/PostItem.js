import React from 'react'
import { StoreContext } from './StoreContext'
import './styles/PostItem.css'

export default function PostItem(props) {

  const {title, cover, descript, tags, category, author, profpic, datecreated} = props.el

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
        <img src={cover} alt=""/>
      </div>
      <div className="infocont">
        <div className="headercont">
          <h3>{shortenMsgs(title,82)}</h3>
          <p>{shortenMsgs(descript,140)}</p>
        </div>
        <div className="elementscont">
          <div className="authorcont">
            <img src={profpic} alt=""/>
            <h6>{author}<small>{datecreated}</small></h6>
          </div>
          <div className="actionscont">
            <div><i class="fal fa-comment"></i><h6>2 Comments</h6></div>
            <div><i class="fal fa-bookmark"></i><h6>Save</h6></div>
          </div>
        </div>
      </div>
    </div>
  )
}