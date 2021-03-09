import React from 'react'
import PaypalExpressBtn from 'react-paypal-express-checkout'
 
export default function PayPalExpress() {

  const onSuccess = (payment) => {
    // Congratulation, it came here means everything's fine!
    console.log("The payment was succeeded!", payment);
    // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
  }
 
  const onCancel = (data) => {
    // User pressed "cancel" or close Paypal's popup!
    console.log('The payment was cancelled!', data);
    // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
  }

  const onError = (err) => {
    // The main Paypal's script cannot be loaded or somethings block the loading of that script!
    console.log("Error!", err);
    // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
    // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
  }

  let env = 'production' // you can set here to 'production' for production or 'sandbox'
  let currency = 'CAD'
  let total = 0.05

  const client = {
      sandbox:    '',
      production: 'ASTQpkv9Y3mQ5-YBd20q0jMb9-SJr_TvUl_nhXu5h3C7xl0wumYgdqpSYIL6Vd__56oB7Slag0n2HA_r', 
  }

  return (
      <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
  )
}