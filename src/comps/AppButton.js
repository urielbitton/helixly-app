import React from 'react'
import './styles/AppButton.css'

export default function AppButton(props) {

  const {title, icon, onClick, size=11, color="#333", iconcolor='#333', bg="#f2f5f8"} = props

  return (
    <div className="appbutton" style={{background:bg}} onClick={() => onClick&&onClick()}>
      <h6 style={{fontSize:size,color:color}}>
        {icon&&<i className={icon} style={{color:iconcolor}}></i>}
        {title}
      </h6>
    </div>
  )
}