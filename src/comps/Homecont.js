import React, { useContext } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"
import Home from './Home'
import NewPost from './NewPost'
import ReadingList from './ReadingList'
import Account from './Account'
import Settings from './Settings'
import './styles/Homecont.css'
import { StoreContext } from './StoreContext'
import PostPage from './PostPage'
import Profile from './Profile'

export default function Homecont() {

  const {posts, allUsers} = useContext(StoreContext) 

  const postpage = posts && posts.map(el => {
    return <Route path={`/posts/${el.id}`}>
      <PostPage el={el} />
    </Route>
  }) 
  const profilepage = allUsers && allUsers.map(el => {
    return <Route path={`/profile/${el.userinfo.uid}`}>
      <Profile el={el.userinfo} />
    </Route>
  })

  return (
    <div className="homecont"> 
      <div className="grid">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/readinglist">
            <ReadingList />
          </Route>
          <Route path="/newpost">
            <NewPost />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          {postpage}
          {profilepage}
        </Switch>
      </div>
    </div> 
  )
}