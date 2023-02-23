import React, { useContext } from "react";
import { dataListMovieContext } from "../../App";
import logo1 from "../assets/themeforest-light-background.png";
import "./OurPartners.scss";
function OurPartners() {
  const dataOurPartners = useContext(dataListMovieContext);
  console.log(dataOurPartners);
  return (
    <>
      <div className='our-parteners-container'>
        <div className='wrap-our-parteners'>
          <h2>Our Partners</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using.
          </p>
          <ul>
            {dataOurPartners.map((e) => (
              <li>
                <img src={e.ourpartners} alt='' />
              </li>
            ))}

            {/* <li><img src={logo1} alt='' /></li>
            <li><img src={logo1} alt='' /></li>
            <li><img src={logo1} alt='' /></li>
            <li><img src={logo1} alt='' /></li> */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default OurPartners;
