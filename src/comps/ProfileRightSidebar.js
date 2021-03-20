import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/ProfileRightSidebar.css'
import axios from 'axios'
import { StoreContext } from './StoreContext'
import LockedContent from './LockedContent'

export default function ProfileRightSidebar(props) {

  const {myuser} = useContext(StoreContext)
  const {githubUsername} = props.el
  const [repos, setRepos] = useState([])

  const reposrow = repos && repos.slice(0,5).map(el => {
    return <a href={el.html_url} target="_blank" rel="noreferrer">
    <div className="repocont">
      <h4><i className="fab fa-github"></i>{el.name}</h4>
      <p>{shortenText(el.description,100)}</p>
      <h6><span>{el.language}</span> <span>•</span> <span>{el.stargazers_count} stars</span></h6>
    </div>
  </a>
  })

  function shortenText(text,num) {
    if(text) {
      if(text.length > num) {
        let shortname = text.substring(0,num) + "..."
        return shortname
      }
      else {
        return text
      }
    }
  }

  useEffect(() => { 
    githubUsername&&
    axios({ 
      method: 'get',
      url: `https://api.github.com/users/${githubUsername}/repos`,
    }).then((response) => {
      setRepos(response.data)
    }) 
  },[githubUsername])

  return (
    <div className="profilerightbar">
      <div>
        <h3>
          <span>Github Repositories</span>
          <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer">View all</a>
        </h3>
        {
          myuser.membership==='pro'?reposrow:
          <LockedContent msg="Upgrade your to pro to add your Github repositories"/>
        }
      </div>
    </div>
  )
}