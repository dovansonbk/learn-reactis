import React from 'react'
import  './NewLetter.css'

export const NewLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Ofeers On Your Email</h1>
        <p>Subscribe to our newlletter and stay updated</p>
        <div>
          <input type="email"  placeholder='Your Email id'/>
          <button>Subscribe</button>
        </div>
    </div>
  )
}
