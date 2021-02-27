import React from 'react'
import './styles/ArticleContent.css'

export default function ArticleContent(props) {

  const {id, title, cover, descript, content, tags, category, author, profpic, datecreated, comments, minread} = props.props

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
        </div>
      </div>
      <article className="textcontent">
        {content} {content}
        <br/><br/> 
        {content}
        <br/>{content} {content} {content}
        <br />
        {content}
      </article>
    </div>
  ) 
}