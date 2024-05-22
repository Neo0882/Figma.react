import React from 'react'
import './section_1.css'
const Section_1 = () => {
  return (
    <>
    <section>
        <div className="wrap">
            <div className="container">
                <div className="programs">
                    <p>PROGRAMS</p>
                    <h1 className='we'>We Have A Programs To Help <br /> Your Workouts </h1>
                    <div className="cards">
                        <div className="card">
                            <img src="img-1.png" alt="" />
                            <h1>Full Body Workout</h1>
                            <p>By The Rock</p>
                            <p>You can do it in your own home, all in under 30 <br /> mins? just need a mat and som ... </p>
                            <div className="check">
                                <p>check out this program</p>
                                <img src="check out.png" alt="" />
                            </div>
                        </div>
                        <div className="card">
                            <img src="img-2.png" alt="" />
                            <h1>Bodyweight Workout</h1>
                            <p>By Timi Tarner</p>
                            <p>No Need equipments, just your body, your soul, <br /> and your spirit. You can do</p>
                            <div className="check">
                                <p>check out this program</p>
                                <img src="check out.png" alt="" />
                            </div>
                        </div>
                        <div className="card">
                            <img src="img-3.png" alt="" />
                            <h1>Dumbell Workout</h1>
                            <p>By Frank Jane</p>
                            <p>This is a workout you can do at home just using a <br /> set of barbells. The workout is ...</p>
                            <div className="check">
                                <p>check out this program</p>
                                <img src="check out.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="workout">
                  <div className="imgss">
                    <img src="img-8.png" alt="" />
                  </div>
                    <div className="nutr">
                        <p>NUTRITIONS</p>
                        <h1>Meal Preparation For <br /> Workout</h1>
                        <p>Don’t worry we have the best nutritionist for your workout, <br />firstly consult with our experts, we can make your meal <br /> preparation based on Total Daily Energy Expenditure.</p>
                        <button>JOIN NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default Section_1