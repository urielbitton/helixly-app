import React from 'react'
import './styles/DesignsComp.css'
import './styles/DesignsCard.css' 

export default function PinterestComp(props) {

  const {api, apiname} = props
  const {pins, user} = api
  const {full_name, image_small_url, location, pin_count, profile_url, follower_count} = user

  const apicards = pins && pins.map(el =>  {
    return  <div className="designscard">
      <img src={el.images['237x'].url} alt=""/>
      <div className="designscardinfo">
        <h4>{el.description}</h4>
        <a href={el.link} alt="" target="_blank" rel="noreferrer">View</a>
      </div>
    </div>
  })  

  return (
    <div className="designscomp">
    <div className="designscomphead">
      <h5>{apiname} Profile: <a href={profile_url}><span><img src={image_small_url} alt=""/>{full_name}</span></a></h5>
      <h5>Pins: <span>{pin_count}</span></h5>
      <h5>Followers: <span>{follower_count}</span></h5>
      <h5>Location: <span>{location}</span></h5>
    </div>
    <div className="designscompcontent">
      {apicards}
    </div> 
  </div>
  )
}