import React, { useContext, useEffect, useRef, useState } from 'react'
import { PayPalButton } from "react-paypal-button-v2"
import { Link } from 'react-router-dom'
import PricePlan from './PricePlan'
import { StoreContext } from './StoreContext'
import './styles/Upgrade.css'
import firebase from 'firebase'
import {db} from './Fire'

export default function Upgrade() {

  const {pricePlans, myuser} = useContext(StoreContext)
  const [showPayments, setShowPayments] = useState(false)
  const [successPaid, setSuccessPaid] = useState(false)
  const [failPaid, setFailPaid] = useState(false)
  const [payDetails, setPayDetails] = useState({})
  let paysRef = useRef()
  const clientid = "ASTQpkv9Y3mQ5-YBd20q0jMb9-SJr_TvUl_nhXu5h3C7xl0wumYgdqpSYIL6Vd__56oB7Slag0n2HA_r"
  const user = firebase.auth().currentUser

  const plansrow = pricePlans && pricePlans.map(el => {
    return <PricePlan el={el} setShowPayments={setShowPayments}/>
  })

  function SendProEmail() { 
    const templateid = 'template_tejvl19'
    sendFeedback(templateid, {
      to_name:payDetails.payer.name.given_name+' '+payDetails.payer.name.surname, 
      to_email:payDetails.payer.email_address,
      payer_id: payDetails.payer.payer_id,
      total_amount: payDetails.purchase_units[0].amount.value,
      payee_email_address: payDetails.purchase_units[0].payee.email_address,
      merchant_id: payDetails.purchase_units[0].payee.merchant_id,
      transaction_date: payDetails.create_time
    })
  }
  function sendFeedback (templateid, variables) { 
    window.emailjs.send(
      'service_dt2mwvw', templateid,
      variables
      ).then(res => {
        
      })
    .catch(err => {
  
    })
  }
  
  useEffect(() => {
    paysRef.current.scrollIntoView()
  },[showPayments])

  useEffect(() => {
    myuser.membership = 'pro'
    db.collection('users').doc(user.uid).update({
      userinfo: myuser
    }) 
  },[successPaid])

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
          <div className="paypalcont">
            <PayPalButton
              amount="0.01"
              onSuccess={(details, data) =>  {setSuccessPaid(true);setPayDetails(details);SendProEmail();console.log(payDetails)}}
              onError={() => setFailPaid(true)}
              options={{ clientId: clientid }}
            />
          </div>
          <div className="paymentmessages"> 
            <p style={{display: successPaid?'block':'none'}}>Payment successful! Thank you for purchasing a pro membership. 
              You will receive an email shortly with your receipt and details of your new account. 
              <br/>
              <Link to="/" className="linkable"><i className="fal fa-home"></i>Home</Link>
              <Link to="/myaccount" className="linkable"><i className="fal fa-user"></i>My Account</Link>
            </p> 
            <p style={{display: failPaid?'block':'none', color:'var(--red)'}}>
              There was an error receving your payment. Please try again later.
            </p>
          </div>
        </div>
        <div className="right">
          <img src="https://i.imgur.com/yxD9lmS.png" alt="" />
        </div>
      </div>
      <div className="spacer"></div>
      <div className="qacont">
        <h3>Pro Features</h3>
        <h6>What are the advantages of a pro plan comapred to the basic plan?</h6>
        <div className="qacontinner">
          <div>
            <div className="iconholder"><i className="fal fa-bolt"></i></div>
            <h4>Access premium content</h4>
            <p>Read from our selection of carefully curated content only available to premium members.</p>
          </div>
          <div>
            <div className="iconholder"><i className="fal fa-paint-brush"></i></div>
            <h4>Showcase your designs</h4>
            <p>Showcase your designs on your profile with a range of choices such as Dribbble, Pinterest and more.</p>
          </div>
          <div>
            <div className="iconholder"><i className="fal fa-user-edit"></i></div>
            <h4>Moderate the content</h4>
            <p>With a pro membership you can moderate other user's posts and comments.</p>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  )
}