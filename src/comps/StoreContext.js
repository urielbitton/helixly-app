import React, {createContext, useEffect, useState} from 'react'

export const StoreContext = createContext()

const StoreContextProvider = (props) => {

  const [posts, setPosts] = useState([
    { 
      id: 1,
      title: 'What’s the difference between user interface and user experience?',
      cover: 'https://i.imgur.com/QutMKk2.jpg',
      descript: `At the most basic level, the user interface (UI) is the series of screens, pages, and visual elements—like buttons and icons—that enable a person to interact with a product or service.`,
      tags: ['UX','UI','Design','Web'],
      category: ['UI/UX'],
      author: 'User Testing Blog',
      profpic: 'https://i.imgur.com/on2r6TT.jpg',
      datecreated: 'February 25 2021',
      comments: []
    },
    { 
      id: 2,
      title: 'The First Rule of UX',
      cover: 'https://i.imgur.com/e98L8NF.jpg',
      descript: `By Joshua Brewer on 52 Weeks of UX Now that you know what UX is, what's next? This article will help you get more familiar with the terminology and best practices. If you read all 52 weeks, you’re well on your way to becoming a UX pro.`,
      tags: ['UX','UI','Development'],
      category: ['UI/UX','Development'],
      author: 'Joshua Brewer',
      profpic: 'https://i.imgur.com/on2r6TT.jpg',
      datecreated: 'February 27 2021',
      comments: []
    },
    { 
      id: 3, 
      title: 'The Usability of Your Website Starts with Its Content',
      cover: 'https://i.imgur.com/aYg4z3E.jpg',
      descript: `By Patrick Frehtenbaum on Usability Geek We all know that awesome graphics and SEO are important, but this article reminds us that even the most attractive website is still only as good as its content.`,
      tags: ['Web Design','Development'],
      category: ['Web Design'],
      author: 'Patrick Frehtenbaum',
      profpic: 'https://i.imgur.com/on2r6TT.jpg',
      datecreated: 'February 28 2021',
      comments: []
    } 
  ])
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

  return (
    <StoreContext.Provider value={{
      posts, setPosts, filters, setFilters, activeFilter, setActiveFilter
    }}>
      {props.children}
    </StoreContext.Provider>
  )

} 

export default StoreContextProvider