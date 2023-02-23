import React, { useContext } from "react";

import Slider from "react-slick";
import { dataListMovieContext } from "../../App";
import logo1 from "../assets/cover1.jpg";
import logo2 from "../assets/cover2.jpg";
import logo3 from "../assets/cover3.jpg";
import logo4 from "../assets/cover4.jpg";
import "./SlickCarouel.scss";

function SlickCaroel() {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 2,
    Padding: "200px",
  };

  const dataCarousel = useContext(dataListMovieContext);
  return (
    <>
      <div className='content-container'>
        <div className='wrap-content'>
          <div className='slick-carosel-content'>
            <h2>NEW ITEMS OF THIS SEASON</h2>
            <div className='slick-crowsel-content'>
                <Slider {...settings}>
              {dataCarousel.map((e) => (
                  <div className='wrap-slick-carosel'>
                    <a href='/detail'>
                      <img src={e.image} alt='' />
                    </a>
                    <h3>{e.name}</h3>
                    <p>{e.performer}</p>
                    <span>
                      <ion-icon name='star-outline'></ion-icon> {e.rating}
                    </span>
                  </div>
                
                  ))}
                </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlickCaroel;
