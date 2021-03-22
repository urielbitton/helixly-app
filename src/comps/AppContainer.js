import React, { useEffect, useState, useContext } from 'react'
import BottomNav from './BottomNav'
import { db } from './Fire'
import Homecont from './Homecont'
import Navbar from './Navbar'
import './styles/AppContainer.css'
import LoaderScreen from './LoaderScreen'
import { StoreContext } from './StoreContext'

export default function AppContainer() {

  const {myuser} = useContext(StoreContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    db.collection('posts').onSnapshot(snap => {
      const allposts = []
      snap.forEach(el => {
        allposts.push(el.data())
      })
      if(myuser)
        setLoading(false)
    })
  },[])

  return (
    <div className="appcontainer">
      <Navbar />
      { loading?<LoaderScreen />:<Homecont /> }
      <BottomNav />
    </div>
  )
}
