import React, { useContext, useEffect, useRef, useState } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import StripeCheckout from 'react-stripe-checkout'
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
  const [payMode, setPayMode] = useState(0)
  let paysRef = useRef()
  const clientid = "ASTQpkv9Y3mQ5-YBd20q0jMb9-SJr_TvUl_nhXu5h3C7xl0wumYgdqpSYIL6Vd__56oB7Slag0n2HA_r"
  const stripekey = 'pk_live_51ITJTrAn0vm3U8V17WgxK6P58VlGZ2FeSNy7ObpeuhKF4XDzohXQX5nV4EJYTxH3JGhYCgEpD9URy5OuGp6RWnEk00PoSBI941'
  const user = firebase.auth().currentUser

  const plansrow = pricePlans && pricePlans.map(el => {
    return <PricePlan el={el} setShowPayments={setShowPayments}/>
  })

  function SendProEmail(details) { 
    const templateid = 'template_tejvl19' 
    sendFeedback(templateid, {
      to_name:details.payer.name.given_name+' '+details.payer.name.surname, 
      to_user_name: user.displayName,
      to_email:user.email, 
      payer_id: details.payer.payer_id,
      total_amount: details.purchase_units[0].amount.value,
      payee_email_address: details.purchase_units[0].payee.email_address,
      merchant_id: details.purchase_units[0].payee.merchant_id,
      transaction_date: details.create_time
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
  const onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`)
      })
    }).catch(error => {
      console.log('There was an error. '+error)
    })
  }
  
  useEffect(() => { 
    paysRef.current.scrollIntoView()
  },[showPayments])

  useEffect(() => {  
    if(successPaid) {
      myuser.membership = 'pro'
      myuser.premium = true
      db.collection('users').doc(user.uid).update({
        userinfo: myuser   
      }) 
    }
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
          <div className="paypalcont" style={{display: payMode===0?'block':'none'}}> 
            <h3>Pay With PayPal</h3>
            <h6>Pay with paypal for quick checkout without a credit card</h6>
            <div className="paypalcontinner">
              <PayPalButton
                amount="0.01" 
                onSuccess={(details, data) =>  {setSuccessPaid(true);SendProEmail(details)}}
                onError={() => setFailPaid(true)}
                options={{ clientId: clientid }}
              />
            </div>
          </div>
          <div className="stripecont" style={{display: payMode===1?'block':'none'}}>
            <h3>Pay With Stripe</h3>
            <h6>Pay directly with a credit or debit card</h6>
            <StripeCheckout
              token={onToken}
              stripeKey={stripekey}
              currency="USD"
              amount={1}
              email={myuser.email} 
            />
          </div>
          <div className="paymentmessages" style={{display: (successPaid | failPaid)?"block":"none"}}> 
            <p style={{display: successPaid?'block':'none'}}>Payment successful! Thank you for purchasing a pro membership. 
              You will receive an email shortly with your receipt and details of your new account. 
              <br/>
              <Link to="/" className="linkable"><i className="fal fa-home"></i>Home</Link>
              <Link to={`/profile/${user.uid}`} className="linkable"><i className="fal fa-user"></i>My Account</Link>
            </p> 
            <p style={{display: failPaid?'block':'none', color:'var(--red)'}}>
              There was an error receving your payment. Please try again later.
            </p>
          </div>
        </div>
        <div className="right">   
          {
            payMode===0?<h4 onClick={() => setPayMode(1)}>Pay With Credit Card Instead</h4>:
            <h4 onClick={() => setPayMode(0)}>Pay With PayPal</h4>
          }
          <img src="https://i.imgur.com/yxD9lmS.png?1" alt="" />
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