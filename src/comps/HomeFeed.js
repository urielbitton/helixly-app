import React, { useContext } from 'react'
import PostItem from './PostItem'
import { StoreContext } from './StoreContext'
import './styles/HomeFeed.css'

export default function HomeFeed() {

  const {posts, filters, activeFilter} = useContext(StoreContext)

  const postsrow = posts && posts
    .slice(0)
    .reverse()
    .filter(x => x.category.includes(activeFilter) || activeFilter==='All Posts') 
    .map(el => {
      return <PostItem el={el}/>
  })
 
  return (
    <div className="homefeed">
      <div className="feedtitles">
        <h3>{activeFilter}</h3>
      </div>
      {postsrow}
    </div>
  )
}