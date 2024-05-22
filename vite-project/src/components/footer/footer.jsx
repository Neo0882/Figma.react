import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <>
    
    <footer>
        <div className="container">
            <div className="inform">
                <div className="stay">
                    <h1>StayHealthy</h1>
                    <p>Online Training, and Consultation About Diet and Exercise <br /> tailored based on user needs. </p>
                    <div className="iconss">
                        <img src="you.t.png" alt="" />
                        <img src="FB.png" alt="" />
                        <img src="insta.png" alt="" />
                    </div>
                </div>
                <div className="stay">
                    <h1>Product</h1>
                    <p>Gym Equipment</p>
                    <p>Suplement</p>
                    <p>Blog</p>
                </div>
                <div className="stay">
                    <h1>Explore Us</h1>
                    <p>FAQ</p>
                    <p>Privacy Policy</p>
                    <p>Term and Conditions</p>
                </div>
                <div className="stay">
                    <h1>Contact</h1>
                    <p>hi@stayhealthy.com</p>
                    <p>021-123-636</p>
                    <p>stayhealthy.com</p>
                </div>
            </div>
                <p className='all'>© 2021 StayHealty. All rights reserved</p>
        </div>
    </footer>
    
    </>
  )
}

export default Footer