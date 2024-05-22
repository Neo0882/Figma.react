import React from "react";
import "./section_2.css";

const Section_2 = () => {
  return (
    <>
      <section className="sec2">
        <div className="wrap">
          <div className="container">
            <div className="pricing">
              <div className="info-coose">
                <p>PRICING</p>
                <h1>
                  CHOOSE YOUR PACKAGE <br /> FOR WORKOUT
                </h1>
              </div>
              <div className="cardss">
                <div className="card">
                  <h1>Basic</h1>
                  <img src="img-9.png" alt="" />
                  <p>The Rock</p>
                  <ul>
                    <li>3 Times A Week</li>
                    <li>Full Zoom</li>
                    <li>PDF Module</li>
                    <li>Meal Preparation</li>
                  </ul>
                  <h1>
                    Rp500.000 <span>/month</span>
                  </h1>
                  <button className="btn">Workout Now</button>
                </div>
                <div className="card">
                  <h1>Basic</h1>
                  <img src="img-9.png" alt="" />
                  <p>The Rock</p>
                  <ul>
                    <li>3 Times A Week</li>
                    <li>Full Zoom</li>
                    <li>PDF Moudule</li>
                    <li>Meal Preparation</li>
                  </ul>
                  <h1>
                    Rp500.000 <span>/month</span>
                  </h1>
                  <button className="btn">Workout Now</button>
                </div>
                <div className="card">
                  <h1>Basic</h1>
                  <img src="img-9.png" alt="" />
                  <p>The Rock</p>
                  <ul>
                    <li>3 Times A Week</li>
                    <li>Full Zoom</li>
                    <li>PDF Moudule</li>
                    <li>Meal Preparation</li>
                  </ul>
                  <h1>
                    Rp500.000 <span>/month</span>
                  </h1>
                  <button className="btn">Workout Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section_2;
