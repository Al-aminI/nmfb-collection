
import React, { useState, useEffect } from "react";
import { Navigation } from "../../components/landingPage/navigation";
import { HJ } from "../../components/products/hj";

import { Contact } from "../../components/landingPage/contact";
import JsonData from "../../data/data.json";
import SmoothScroll from "smooth-scroll";

import "../../App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export const HJPage = () => {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navigation />
      
      <HJ />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};
