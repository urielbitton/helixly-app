import React, { useContext, useEffect, useRef, useState } from 'react'
import { PayPalButton } from "react-paypal-button-v2"
import PricePlan from './PricePlan'
import { StoreContext } from './StoreContext'
import './styles/Upgrade.css'

export default function Upgrade() {

  const {pricePlans} = useContext(StoreContext)
  const [showPayments, setShowPayments] = useState(false)
  let paysRef = useRef()

  const plansrow = pricePlans && pricePlans.map(el => {
    return <PricePlan el={el} setShowPayments={setShowPayments}/>
  })

  useEffect(() => {
    paysRef.current.scrollIntoView() 
  },[showPayments])

  return (
    <div className="upgradepage">
      <div className="banner">
        <h3>Upgrade your Helixly Plan</h3>  
        <h6>A pro plan gives you access to premium content and design showcases.</h6>
      </div>
      <div className="priceplanscont">
        {plansrow}
      </div>
      <div className="spacer"></div>
      <div ref={paysRef} className="paymentscont" style={{display: showPayments?"flex":'none'}}>
        <i className="fal fa-times" onClick={() => setShowPayments(false)}></i>
        <div className="left">
          <h3>Pay With PayPal</h3>
          <h6>Our current payment options include only paypal for now.</h6>
          <PayPalButton
            amount="0.01"
            onSuccess={(details, data) => { alert("Transaction completed by " + details.payer.name.given_name) }}
            options={{ clientId: "ASTQpkv9Y3mQ5-YBd20q0jMb9-SJr_TvUl_nhXu5h3C7xl0wumYgdqpSYIL6Vd__56oB7Slag0n2HA_r" }}
          />
        </div>
        <div className="right">
          <img src="https://i.imgur.com/yxD9lmS.png" alt="" />
        </div>
      </div>
      <div className="spacer"></div>
      <div className="qacont">
        <h3>Pro Features</h3>
        <h6>What are te advantages of a pro plan comapred to the basic plan?</h6>
        <div className="qacontinner">
          <div>
            <div className="iconholder"><i className="fal fa-bolt"></i></div>
            <h4>Access premium content</h4>
            <p>Read from our selection of carefully curated content only available to premium members.</p>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  )
}