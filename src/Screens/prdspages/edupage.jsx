
import React, { useState, useEffect } from "react";
import { Navigation } from "../../components/landingPage/navigation";
import { EDU } from "../../components/products/edu";

import { Contact } from "../../components/landingPage/contact";
import JsonData from "../../data/data.json";
import SmoothScroll from "smooth-scroll";

import "../../App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export const EDUPage = () => {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navigation />
      
      <EDU />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};
