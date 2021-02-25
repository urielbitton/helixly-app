import React from 'react'
import BottomNav from './BottomNav'
import Homecont from './Homecont'
import Navbar from './Navbar'
import './styles/AppContainer.css'

export default function AppContainer() {

  return (
    <div className="appcontainer">
      <Navbar />
      <Homecont />
      <BottomNav />
    </div>
  )
}
