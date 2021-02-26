import React from 'react'
import HomeFeed from './HomeFeed'
import HomeSidebar from './HomeSidebar'
import './styles/Home.css'

export default function Home() {

  return (
    <div className="homepage">
      <HomeSidebar />
      <HomeFeed />
    </div>
  )
}