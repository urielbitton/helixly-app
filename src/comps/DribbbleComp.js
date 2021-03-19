import React from 'react'
import './styles/DesignsComp.css'

export default function DribbbleComp(props) {

  const {api, apiname} = props
  const {fullname} = props.userinfo

  const apicards = api && api.map(el =>  {
    return <div className="designscard">
      <img src={el.images.normal} alt="" />
      <div className="designscardinfo">
        <h4>{el.title}</h4>
        <div className="tagsrow">
        {
          el.tags && el.tags.slice(0,4).map(el => {
            return <small>#{el}</small>
          })
        }
        </div>
        <a href={el.html_url} alt="" target="_blank" rel="noreferrer">View</a>
      </div>
    </div>
  }) 
  

  return (
    <div className="designscomp">
    <div className="designscomphead">
      <h5>{apiname} Profile: <span>{fullname}</span></h5>
      <h5>Shots: <span>{api.length}</span></h5>
    </div>
    <div className="designscompcontent">
      {apicards}
    </div> 
  </div>
  )
}