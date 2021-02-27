import React from 'react'
import { useHistory } from 'react-router-dom'
import AppButton from './AppButton'
import './styles/PostSidebar.css'

export default function PostSidebar(props) {

  const {comments, favorites, saves, profpic, author} = props.props
  const history = useHistory()

  return (
    <div className="postsidebar">
      <div className="breadcrumbscont">
        <h5 onClick={() => history.goBack()}><i className="fal fa-long-arrow-alt-left"></i></h5>
      </div>
      <div className="sharescont">
        <div>
          <div className="iconcont"><i className="far fa-heart"></i></div>
          <h6>{favorites}</h6>
        </div>
        <div>
          <div className="iconcont"><i className="far fa-bookmark"></i></div>
          <h6>{saves}</h6>
        </div>
        <div>
          <div className="iconcont"><i className="far fa-comment"></i></div>
          <h6>{comments.length}</h6>
        </div>
        <div>
          <div className="iconcont"><i className="far fa-ellipsis-h"></i></div>
        </div>
      </div>
      <div className="postauthorcont">
        <h5>About the Author</h5>
        <h6 className="authorcont"><img src={profpic} alt=""/>{author}</h6>
        <p>
          Hi i'm an avid web and app developer in search for creativity and always going after new ideas. Developer of Reactor JS
        </p>
        <div className="authorbtns">
          <AppButton title="Follow" size={14} icon="far fa-plus" bg="#e6e6e6" />
          <AppButton title="Message" size={14} icon="far fa-paper-plane" bg="#e6e6e6"/>
        </div>
      </div>
    </div>
  )
}