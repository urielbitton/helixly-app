import React, {createContext, useEffect, useState} from 'react'
import {db} from './Fire'
import firebase from 'firebase'

export const StoreContext = createContext()

const StoreContextProvider = (props) => {

  const user = firebase.auth().currentUser
  const [posts, setPosts] = useState([])
  const [myuser, setMyUser] = useState([])
  const [allUsers, setAllUsers] = useState([])
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
  const [commentsScroll, setCommentsScroll] = useState(false)
  const [pricePlans] = useState([
    {
      title: 'Basic',
      price: 'Free',
      license: 'None',
      features: ['Read free articles','Write unlimited articles','Basic Profile',''],
      membership: 'free'
    },
    {
      title: 'Pro',
      price: '$5/month',
      license: 'Helixly lifetime License',
      features: ['Read + write articles','Design showcase profile','All Pro tools','Technical Support'],
      membership: 'pro'
    }
  ])
 
  useEffect(() => {
    db.collection('posts').doc('articles').onSnapshot(snap => {
      setPosts(snap.data().allposts)  
    }) 
    user&&db.collection('users').doc(user.uid).onSnapshot(snap => {
      const userdata = snap.data()
      setMyUser(userdata.userinfo)
    }) 
    db.collection('users').onSnapshot(snap => {
      const userlist = []
      snap.forEach(el => { userlist.push(el.data()) })
      setAllUsers(userlist)   
    })
  },[user])

  return (
    <StoreContext.Provider value={{
      posts, setPosts, myuser, setMyUser, allUsers, setAllUsers, filters, setFilters, activeFilter, setActiveFilter, editData, setEditData,
      editMode, setEditMode, commentsScroll, setCommentsScroll, pricePlans
    }}>
      {props.children}
    </StoreContext.Provider>
  )

} 

export default StoreContextProvider