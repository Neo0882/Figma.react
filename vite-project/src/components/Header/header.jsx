import React from 'react'
import './header.css'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'


const Header = () => {
  return (
    <>
    <header>
      <div className="wrap">
        <div className="container">
            <div className="nav">
                <h1>StayHealtthy</h1>
              <div className="info">
                <p>Home</p>
                <p>Program</p>
                <p>Nutritions</p>
                <p>Pricing</p>
                <p>About</p>
              </div>
              <button className='buttons'>Join Now</button>
            </div>
            <div className="welcome-info">
              <p>WELCOME TO THE CLUB</p>
              <h1>Choose Your Programs,<br /> Pick Your Medal, <br /> Let's Get Healthy. </h1>
              <p>StayHealthy Provides Online Training, And Consultation About Exercise Tailored Based <br /> On User Needs.
                We Will Provide A Training Model That Can Be Accesed Anytime And <br /> Anywhere With The Best Trainers</p>
                <div className="btn">
                  <button className='buttons'>Join Now</button>
                  <button className='us'>Contact Us</button>
                </div>
            <img className='img' src="collab.png" alt="" />
            </div>
        </div>
 </div>
    </header>
    
    </>
  )
}

export default Header