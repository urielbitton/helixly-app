import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './styles/PricePlan.css'
import firebase from 'firebase'
import { StoreContext } from './StoreContext'

export default function PricePlan(props) {

  const {myuser} = useContext(StoreContext)
  const {title, price, license, features, membership} = props.el
  const {setShowPayments} = props
  const user = firebase.auth().currentUser

  const featurelist = features && features.map(el => {
    return <div className="featureitem" style={{visibility:!el.length&&'hidden'}}>
      <h4><i className="fas fa-check"></i>{el}</h4>
    </div>
  })

  function memberButton() {
    if(myuser.membership==='free') {
      if(membership==='pro') {
        return <button onClick={() => setShowPayments(true)}><i></i>Buy Now<i className="far fa-shopping-bag"></i></button>
      }
      else {
        return <button className="nonprobtn" disabled><i></i>Already Active<i className="far fa-check"></i></button>
      }
    }
    else {
      if(membership==='pro') {
        return <button className="nonprobtn" disabled><i></i>Already Active<i className="far fa-check"></i></button>
      }
      else {
        return <button disabled><i></i>Get Basic<i className="far fa-shopping-bag"></i></button>
      }
    }
  }

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
        {memberButton()}
       
       <small>See <Link to="" className="linkable">terms and conditions</Link></small>
    </div>
  )
}