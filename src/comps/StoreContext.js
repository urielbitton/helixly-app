import React, {createContext, useEffect, useState} from 'react'
import {db} from './Fire'

export const StoreContext = createContext()

const StoreContextProvider = (props) => {

  const [posts, setPosts] = useState([])
  const [filters, setFilters] = useState([
    {
      name: 'All Posts',
      icon: 'fal fa-circle',
    },
    {
      name: 'UI/UX',
      icon: 'fal fa-paint-brush',
    },
    {
      name: 'Development',
      icon: 'fal fa-code',
    },
    {
      name: 'App Design',
      icon: 'fal fa-mobile-android',
    },
    {
      name: 'Web Design',
      icon: 'fal fa-desktop',
    },
    {
      name: 'Trends',
      icon: 'fal fa-poll',
    },
  ])
  const [activeFilter, setActiveFilter] = useState('All Posts')
  const [editData, setEditData] = useState({})
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    db.collection('posts').doc('articles').onSnapshot(snap => {
      setPosts(snap.data().allposts)  
    })
  },[])

  return (
    <StoreContext.Provider value={{
      posts, setPosts, filters, setFilters, activeFilter, setActiveFilter, editData, setEditData,
      editMode, setEditMode
    }}>
      {props.children}
    </StoreContext.Provider>
  )

} 

export default StoreContextProvider