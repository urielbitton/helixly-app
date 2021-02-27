import React, { useContext, useState, useEffect } from 'react'
import AppButton from './AppButton'
import { StoreContext } from './StoreContext'
import './styles/HomeSidebar.css'

export default function HomeSidebar() {

  const {filters, activeFilter, setActiveFilter} = useContext(StoreContext)
  const [dayTime, setDayTime] = useState('')

  const filtersrow = filters && filters.map(el => {
    return <h5 onClick={() => setActiveFilter(el.name)} className={el.name===activeFilter?"activefilter":""}>
      <div><i className={el.icon}></i></div>
      {el.name} 
    </h5>
  })

  useEffect(() => {
    let time = new Date().getHours()
    if(time >= 0 && time < 12) 
      setDayTime('Morning') 
    else if(time >= 12 && time <=17)
      setDayTime('Afternoon')
    else  
      setDayTime('Evening')
  },[])

  return (
    <div className="homesidebar"> 
      <div className="greetdiv">
        <h4>Good {dayTime} Emily</h4>
        <div>
          <img src="https://i.imgur.com/L76EEqM.jpg" alt="" />
          <AppButton icon="fas fa-user" iconcolor="#555" color="#555" title="My Account" size={13}/>
        </div>
      </div>
      <div className="filters">
        {filtersrow}
      </div>
    </div>
  )
}