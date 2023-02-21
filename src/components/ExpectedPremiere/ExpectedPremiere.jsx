import React from "react";
import logo1 from "../assets/cover1.jpg";
import "./ExpectedPremiere.scss";
function ExpectedPremiere() {
  return (
    <>
      <div className='expected-premiere-content-container'>
        <div className='expected-premiere-content'>
          <h2>Expected premiere</h2>

          <div className='wrap-expected-premiere'>
            <div className='box-img-expected-premiere'>
              <div className='box-img-expected'>
                <img src={logo1} alt='' />
              </div>
              <h4>I Dream in Another L...</h4>
              <p>Action, Triler</p>
              <span>
                <ion-icon name='star-outline'></ion-icon> 8.4
              </span>
            </div>
          </div>
          <div className='show-more-expected'>
              <p className="text-show-more">SHOW MORE</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default ExpectedPremiere;
