import React from 'react'
import { Link } from 'react-router-dom'
import './styles/PricePlan.css'

export default function PricePlan(props) {

  const {title, price, license, features, membership} = props.el
  const {setShowPayments} = props

  const featurelist = features && features.map(el => {
    return <div className="featureitem" style={{visibility:!el.length&&'hidden'}}>
      <h4><i className="fas fa-check"></i>{el}</h4>
    </div>
  })

  return (
    <div className="priceplan">
       <div className="priceheader">
        <img className="logo" src="https://i.imgur.com/zIDDZIR.png" alt=""/>
        <h3>Helixly <span>{title}</span></h3>
        <h5>{price}</h5>
       </div>
       <div className="featureitemcont">
        {featurelist}
       </div>
       {
         membership==='pro'?
         <button onClick={() => setShowPayments(true)}><i></i>Buy Now<i class="far fa-shopping-bag"></i></button>:
         <button className="nonprobtn" disabled><i></i>Already Active<i class="far fa-check"></i></button>
       }
       
       <small>See <Link to="" className="linkable">terms and conditions</Link></small>
    </div>
  )
}