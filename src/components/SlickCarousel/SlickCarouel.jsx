import React from "react";
import Slider from "react-slick";
import "./SlickCarouel.scss";
import logo1 from "../assets/cover1.jpg";
import logo2 from "../assets/cover2.jpg";
import logo3 from "../assets/cover3.jpg";
import logo4 from "../assets/cover4.jpg";
function SlickCaroel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <div className='content-container'>
        <div className='wrap-content'>
          <div className='slick-carosel-content'>
            <h2>NEW ITEMS OF THIS SEASON</h2>
            <div className='slick-crowsel-content'>
              <Slider {...settings}>
                <div className='wrap-slick-carosel'>
                  <img src={logo1} alt='' />
                  <h3>Benched</h3>
                  <p>Comedy</p>
                  <span>
                    <ion-icon name='star-outline'></ion-icon> 7.1
                  </span>
                </div>
                <div className='wrap-slick-carosel'>
                  <img src={logo2} alt='' />
                  <h3>Whitney</h3>
                  <p>Romance, Drama</p>
                  <span>
                    <ion-icon name='star-outline'></ion-icon> 6.3
                  </span>
                </div>
                <div className='wrap-slick-carosel'>
                  <img src={logo3} alt='' />
                  <h3>Blindspotting</h3>
                  <p>Comedy, Drama</p>
                  <span>
                    <ion-icon name='star-outline'></ion-icon> 7.9
                  </span>
                </div>
                <div className='wrap-slick-carosel'>
                  <img src={logo4} alt='' />
                  <h3>I Dream in Another Langua...</h3>
                  <p>Action, Triler</p>
                  <span>
                    <ion-icon name='star-outline'></ion-icon> 8.4
                  </span>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlickCaroel;
