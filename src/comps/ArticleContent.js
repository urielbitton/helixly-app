import React, {useContext} from 'react'
import { useHistory } from 'react-router-dom'
import AppButton from './AppButton'
import './styles/ArticleContent.css'
import {StoreContext} from './StoreContext'

export default function ArticleContent(props) {

  const {setEditData, setEditMode} = useContext(StoreContext)
  const {id, title, cover, content, tags, category, author, profpic, datecreated, comments, minread} = props.props
  const history = useHistory()

  return (
    <div className="articlecontent">
      <div className="headercont">
        <img src={cover} alt="" />
        <h1>{title}</h1> 
        <div className="metadatacont">
          <img src={profpic} alt=""/>
          <h6>{author}</h6>
          <h6><span>{category[0]}</span></h6>
          <h6><span>{datecreated}</span></h6>
          <h6><span>{minread} minute read</span></h6>
          <h6>{comments.length}<i className="far fa-comment"></i></h6>
          <AppButton title="Edit" icon="fal fa-pen" onClick={() => {setEditData(props.props);history.push('/newpost');setEditMode(true)}}/>
        </div>
      </div>
      <article className="textcontent"> 
        {content}
      </article>
    </div>
  ) 
}