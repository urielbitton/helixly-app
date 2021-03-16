import React, { useContext, useState } from 'react'
import {StoreContext} from './StoreContext'
import firebase from 'firebase'
import PostItem from './PostItem'
import './styles/ReadingList.css'
import { NavLink, Route, Switch } from 'react-router-dom'

export default function ReadingList() {

  const user = firebase.auth().currentUser
  const {posts} = useContext(StoreContext)

  const readinglistsaved = posts && posts
    .filter(x => x.saves.includes(user.uid))
    .map(el => {
      return <PostItem el={el} narrow />
  })
  const readingliststarred = posts && posts
    .filter(x => x.starred.includes(user.uid))
    .map(el => {
      return <PostItem el={el} narrow />
  })

  return (
    <div className="readinglistpage">
      <h4>My Reading List</h4>
      <div className="readinglistsidebar">

      </div>
      <div className="readinglistcont">
        <div className="readinglistheader">
          <NavLink exact to="/readinglist/" activeClassName="activereadlink"><h6>Saved ({readinglistsaved.length})</h6><hr/></NavLink>
          <NavLink to="/readinglist/starred" activeClassName="activereadlink"><h6>Starred ({readingliststarred.length})</h6><hr/></NavLink>
        </div>
        <Switch>
          <Route exact path="/readinglist/">
            {readinglistsaved}
          </Route>
          <Route path="/readinglist/starred">
            {readingliststarred}
          </Route>
        </Switch>
      </div>
    </div>
  )
}