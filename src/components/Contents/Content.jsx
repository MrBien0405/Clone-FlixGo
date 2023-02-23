import React, { useContext, useEffect, useState } from "react";
import ExpectedPremiere from "../ExpectedPremiere/ExpectedPremiere";
import NewItem from "../NewItem/NewItem";
import SlickCaroel from "../SlickCarousel/SlickCarouel";
import OurPartners from "../OurPartners/OurPartners";
import "./Content.scss";

function Content() {

  return (
    <>
      <SlickCaroel />
      <NewItem />

      <ExpectedPremiere />
      <OurPartners />
    </>
  );
}

export default Content;
