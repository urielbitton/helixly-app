import React, { useContext } from 'react'
import {StoreContext} from './StoreContext'
import PostItem from './PostItem'

export default function ProfilePosts(props) {

  const {posts} = useContext(StoreContext)
  const {fullname, uid} = props.el

  const postsrow = posts && posts
    .slice()
    .reverse()
    .filter(x => x.authorid===uid)
    .map(el => {
      return <PostItem el={el} />
  })

  return (
    <div className="profileposts">
      <h3>Posts by {fullname} ({postsrow.length})</h3>
      {postsrow}
    </div> 
  ) 
}