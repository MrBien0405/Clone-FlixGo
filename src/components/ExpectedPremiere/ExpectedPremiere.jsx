import React, { useContext } from "react";
import { dataListMovieContext } from "../../App";
import logo1 from "../assets/cover1.jpg";
import "./ExpectedPremiere.scss";
function ExpectedPremiere() {
  const dataExpected = useContext(dataListMovieContext);
  return (
    <>
      <div className='expected-premiere-content-container'>
        <div className='expected-premiere-content'>
          <h2>Expected premiere</h2>

          <div className='wrap-expected-premiere'>
            {dataExpected.map((e) => (
              <div className='box-img-expected-premiere'>
                <div className='box-img-expected'>
                  <img src={e.image} alt='' />
                </div>
                <h4>{e.name}</h4>
                <p>{e.performer}</p>
                <span>
                  <ion-icon name='star-outline'></ion-icon> {e.rating}
                </span>
              </div>
            ))}
          </div>

          <div className='show-more-expected'>
            <p className='text-show-more'>SHOW MORE</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpectedPremiere;
