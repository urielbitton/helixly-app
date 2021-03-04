import React, { useEffect, useState } from 'react'
import BottomNav from './BottomNav'
import { db } from './Fire'
import Homecont from './Homecont'
import Navbar from './Navbar'
import './styles/AppContainer.css'
import LoaderScreen from './LoaderScreen'

export default function AppContainer() {

  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot(snap => {
      const allposts = []
      snap.forEach(el => {
        allposts.push(el.data())
      })
      setAllPosts(allposts)
    })
  },[])

  return (
    <div className="appcontainer">
      <Navbar />
      { allPosts.length?<Homecont />:<LoaderScreen /> }
      <BottomNav />
    </div>
  )
}
