import React, { useContext } from 'react'
import {StoreContext} from './StoreContext'
import PostItem from './PostItem'

export default function ProfilePosts(props) {

  const {posts} = useContext(StoreContext)
  const {firstname, lastname, uid} = props.el

  const postsrow = posts && posts
    .filter(x => x.authorid===uid)
    .map(el => {
      return <PostItem el={el} />
  })

  return (
    <div className="profileposts">
      <h3>Posts by {firstname} {lastname} ({postsrow.length})</h3>
      {postsrow}
    </div> 
  )
}