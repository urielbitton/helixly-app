import React from 'react'
import ArticleContent from './ArticleContent'
import SharesSideBar from './SharesSideBar'
import './styles/PostPage.css'

export default function PostPage(props) {

  return (
    <div className="postpage">
      <SharesSideBar />
      <ArticleContent props={props}/> 
    </div>
  )
}