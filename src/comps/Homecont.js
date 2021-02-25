import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"
import Home from './Home'
import NewPost from './NewPost'
import ReadingList from './ReadingList'
import Account from './Account'
import Settings from './Settings'
import './styles/Homecont.css'

export default function Homecont() {
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
        </Switch>
      </div>
    </div> 
  )
}