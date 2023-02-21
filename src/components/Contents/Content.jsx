import React from "react"
import ExpectedPremiere from "../ExpectedPremiere/ExpectedPremiere";
import NewItem from "../NewItem/NewItem";
import SlickCaroel from "../SlickCarousel/SlickCarouel";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import "./Content.scss"


function Content() {
    
    return ( <>

      <SlickCaroel/>
      <NewItem/>
      <ExpectedPremiere/>

    </> );
}

export default Content;