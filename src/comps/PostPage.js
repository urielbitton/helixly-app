import React from 'react'
import ArticleContent from './ArticleContent'
import PostSidebar from './PostSidebar'
import './styles/PostPage.css'

export default function PostPage(props) {

  return (
    <div className="postpage">
      <PostSidebar props={props.el} />
      <ArticleContent props={props.el} /> 
    </div>
  )
}